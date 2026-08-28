import { db, BlogCategory, Post } from 'astro:db';

export default async function() {
  await db.insert(BlogCategory).values([
    { id: 'cat_blog', name: 'Blog', slug: 'blog' },
  ]);

  await db.insert(Post).values([
    {
      id: 'post_1',
      title: 'FIT TOUR x Đại học Văn Hiến',
      slug: 'fit-tour-van-hien',
      categoryId: 'cat_blog',
      featuredImage: 'https://fittour.vn/wp-content/uploads/2024/04/fit-tour-dai-hoc-van-hien-dao-tao-sinh-vien-du-lich-thuc-te-768x432.jpg',
      excerpt: 'Mô hình đào tạo thực tế sinh viên du lịch.',
      content: '<p>Nội dung chi tiết...</p>',
      type: 'blog',
      status: 'published',
      createdAt: new Date(),
    },
  ]);
}
