async function test() {
  const res = await fetch('https://fittour.vn/api/admin/nodes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-bypass-auth': 'antigravity'
    },
    body: JSON.stringify({
      url: '/blog/chu-duyen-nao-dua-phuong-thanh-tro-lai-ladakh-lan-3',
      tags: 'Ladakh'
    })
  });
  console.log(await res.json());
}
test();
