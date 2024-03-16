import React from 'react';

import classNames from 'classnames';

export interface INavBar {}

interface INavItem {
    id: number;
    text: string;
}

export const NavBar: React.FC<INavBar> = () => {
    const items: INavItem[] = [
        { id: 1, text: 'Dashboard' },
        { id: 2, text: 'Widgets' },
        { id: 3, text: 'Try It Out' },
    ];

    const [activeItem, setActiveItem] = React.useState<number>(null);
    const observer = React.useRef<IntersectionObserver | null>(null);

    React.useEffect(() => {
        const options: any = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const handleIntersect: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const currentId = items.find(
                        (item: INavItem) => item.text === entry.target.id,
                    ).id;
                    setActiveItem(currentId);
                } else {
                    setActiveItem(null);
                }
            });
        };

        observer.current = new IntersectionObserver(handleIntersect, options);

        items.forEach((item: INavItem) => {
            const element = document.getElementById(item.text);
            if (element) {
                observer.current.observe(element);
            }
        });

        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, []);

    const goToSection = (value: string) => {
        const targetElement = document.getElementById(value);

        if (targetElement) {
            const offsetTop = targetElement.getBoundingClientRect().top;
            const headerOffset = 80;
            const totalOffset = offsetTop + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: totalOffset,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className='flex justify-between col-start-2 col-span-2 mx-default text-text text-regular'>
            {items.map((item) => {
                return (
                    <div
                        className={classNames(
                            'cursor-pointer hover:text-highlight transition-colors',
                            { 'text-highlight': item.id === activeItem },
                        )}
                        key={item.id}
                        onClick={() => goToSection(item.text)}
                    >
                        {item.text}
                    </div>
                );
            })}
        </div>
    );
};
