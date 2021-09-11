export const Icon = ({ src, srcOnHover, alt }) => (
    <img
        src={src}
        alt={alt}
        onMouseOver={(e) => {
            srcOnHover && (e.currentTarget.src = srcOnHover);
        }}
        onMouseOut={(e) => {
            srcOnHover && (e.currentTarget.src = src || '');
        }}
    />
);