import { ImageGrid } from './ImageGrid';

export const BranchGallery = ({ images }: { images: string[] }) => (images.length > 0 ? <ImageGrid images={images} /> : null);
