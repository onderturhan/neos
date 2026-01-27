/**
 * MediaItem Interface
 * Paylaşım içeriklerinin yapısını tanımlar
 */
export interface MediaItem {
  id: number;
  icon: string;
  title: string;
  category: string;
  date: string;
  readTime: number;
  preview: string;
  content: string;
}
