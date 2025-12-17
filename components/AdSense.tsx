import React, { useEffect, useRef } from 'react';

interface AdSenseProps {
    adSlot?: string;
    adFormat?: 'auto' | 'fluid' | 'rectangle' | 'horizontal' | 'vertical';
    className?: string;
    style?: React.CSSProperties;
}

declare global {
    interface Window {
        adsbygoogle: any[];
    }
}

const AdSense: React.FC<AdSenseProps> = ({
    adSlot = '7817014831',
    adFormat = 'auto',
    className = '',
    style = {},
}) => {
    const adRef = useRef<HTMLModElement>(null);
    const isAdLoaded = useRef(false);

    useEffect(() => {
        // 광고가 이미 로드되었거나 개발 환경이면 스킵
        if (isAdLoaded.current) return;

        try {
            // adsbygoogle 배열이 없으면 초기화
            if (typeof window !== 'undefined') {
                window.adsbygoogle = window.adsbygoogle || [];
                window.adsbygoogle.push({});
                isAdLoaded.current = true;
            }
        } catch (error) {
            console.error('AdSense error:', error);
        }
    }, []);

    return (
        <div className={`adsense-container ${className}`} style={{ textAlign: 'center', ...style }}>
            <ins
                ref={adRef}
                className="adsbygoogle"
                style={{ display: 'block', ...style }}
                data-ad-client="ca-pub-8105671322406442"
                data-ad-slot={adSlot}
                data-ad-format={adFormat}
                data-full-width-responsive="true"
            />
        </div>
    );
};

export default AdSense;
