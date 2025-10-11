import Image, { ImageProps } from 'next/image';

export default function ImageWithFallback(props: ImageProps) {
    return (
        <Image
            {...props}
            onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = props.alt || '/placeholder-image.jpg';
            }}
        />
    );
}