import { cn } from '../../../../core/utils/tmerge';

export default function StickyFooter({
    children,
    className,
    heightValue = '100dvh',
    ...props
}) {
    return (
        <div
            className="relative"
            style={{
                height: heightValue,
                clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)',
            }}
            {...props}
        >
            <div
                className={cn('fixed bottom-0 w-full', className)}
                style={{ height: heightValue }}
            >
                {children}
            </div>
        </div>
    );
}
