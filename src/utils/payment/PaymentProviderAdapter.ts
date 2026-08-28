export interface StandardPaymentWebhook {
  type: "PAYMENT_WEBHOOK";
  provider: string;
  event_id: string; 
  correlation_id: string;
  idempotency_key: string;
  provider_order_id: string;
  provider_transaction_id: string;
  status: "SUCCEEDED" | "FAILED" | "PENDING";
  amount: number;
  currency: string;
  paid_at: string;
  raw_event_ref: any;
}

export interface PaymentProviderAdapter {
  /**
   * Xác thực Webhook Signature (chống giả mạo). 
   * Trả về true nếu hợp lệ, false nếu giả mạo.
   */
  verifyWebhook(request: Request, secret: string): Promise<boolean>;
  
  /**
   * Chuyển đổi payload riêng của Provider thành định dạng chuẩn của FIT TOUR
   */
  normalizeWebhook(request: Request): Promise<StandardPaymentWebhook>;
  
  /**
   * Build HTTP Response phù hợp với đặc tả của Provider để xác nhận nhận Webhook thành công
   */
  buildWebhookResponse(isSuccess: boolean, message?: string): Response;
}
