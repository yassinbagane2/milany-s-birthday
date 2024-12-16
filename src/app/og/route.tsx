import { ImageResponse } from 'next/og'
import { baseURL, renderContent } from '@/app/resources';
import { getTranslations } from 'next-intl/server';

export const runtime = 'edge';

export async function GET(request: Request) {
    let title = 'Puppy Birthday'
    const font = fetch(
        new URL('../../../public/fonts/Inter.ttf', import.meta.url)
    ).then((res) => res.arrayBuffer());
    const fontData = await font;

    return new ImageResponse(
        (
            <div
                style={{
                    display: 'flex',
                    width: '100%',
                    height: '100%',
                    padding: '8rem',
                    background: '#151515',
                }}>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: '4rem',
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        color: 'white',
                    }}>
                    <span
                        style={{
                            fontSize: '8rem',
                            lineHeight: '8rem',
                            letterSpacing: '-0.05em',
                            whiteSpace: 'pre-wrap',
                            textWrap: 'balance',
                        }}>
                        {title}
                    </span>

                    <span
                        style={{
                            fontSize: '2.5rem',
                            lineHeight: '2.5rem',
                            whiteSpace: 'pre-wrap',
                            textWrap: 'balance',
                            opacity: '0.6'
                        }}>
                        Milany tanase
                    </span>
                </div>
            </div>
        ),
        {
            width: 1920,
            height: 1080,
            fonts: [
                {
                    name: 'Inter',
                    data: fontData,
                    style: 'normal',
                },
              ],
        }
    )
}