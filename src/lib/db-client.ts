// src/lib/db-client.ts

export interface QueryContext {
  route: string;
  slug?: string;
  queryType: string;
  timeoutMs?: number;
}

const DEFAULT_TIMEOUT = 5000;

/**
 * Wraps a promise with a timeout to prevent hanging workers.
 */
export async function withTimeout<T>(promise: Promise<T>, ms: number, errorMessage = "Timeout exceeded"): Promise<T> {
  let timeoutId: ReturnType<typeof setTimeout>;
  const timeoutPromise = new Promise<T>((_, reject) => {
    timeoutId = setTimeout(() => {
      reject(new Error(errorMessage));
    }, ms);
  });

  return Promise.race([
    promise,
    timeoutPromise
  ]).finally(() => {
    clearTimeout(timeoutId);
  });
}

/**
 * Executes a database query critically.
 * If it fails or times out, it throws an error to be caught by the page route (which should then return 500).
 */
export async function safeQueryCritical<T = any>(
  promise: Promise<any>,
  context: QueryContext
): Promise<T> {
  const start = Date.now();
  try {
    const timeout = context.timeoutMs || DEFAULT_TIMEOUT;
    const result = await withTimeout(promise, timeout, `Database query timeout after ${timeout}ms`);
    return result as T;
  } catch (error: any) {
    const duration_ms = Date.now() - start;
    console.error({
      ...context,
      duration_ms,
      error: error.message || error.toString(),
      level: 'CRITICAL_FAILURE'
    });
    // Throw error so the Astro route can catch it and return Astro.rewrite("/500")
    throw error;
  }
}

/**
 * Executes a database query optionally.
 * If it fails or times out, it catches the error, logs it, and returns a fallback value (e.g. empty array or null).
 */
export async function safeQueryOptional<T = any>(
  promise: Promise<any>,
  fallbackValue: any,
  context: QueryContext
): Promise<T> {
  const start = Date.now();
  try {
    const timeout = context.timeoutMs || DEFAULT_TIMEOUT;
    const result = await withTimeout(promise, timeout, `Database query timeout after ${timeout}ms`);
    return (result || fallbackValue) as T;
  } catch (error: any) {
    const duration_ms = Date.now() - start;
    console.error({
      ...context,
      duration_ms,
      error: error.message || error.toString(),
      level: 'OPTIONAL_FAILURE'
    });
    return fallbackValue as T;
  }
}
