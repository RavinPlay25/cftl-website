export const MapEmbed = ({ src, title }: { src: string; title: string }) => (
  <div style={{ borderRadius: 14, overflow: 'hidden', border: '1px solid #eceef2', minHeight: 320 }}>
    <iframe title={title} src={src} width="100%" height="320" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
  </div>
);
