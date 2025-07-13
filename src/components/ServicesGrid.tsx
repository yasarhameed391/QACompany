// components/ServicesGrid.tsx

import {
    ComputerDesktopIcon,
    ShieldCheckIcon,
    Cog6ToothIcon,
    CheckBadgeIcon,
} from '@heroicons/react/24/outline';

const services = [
    {
        title: 'Web & Mobile Test Automation',
        icon: <ComputerDesktopIcon className="w-8 h-8 text-white" />,
    },
    {
        title: 'QA Strategy & Advisory',
        icon: <CheckBadgeIcon className="w-8 h-8 text-white" />,
    },
    {
        title: 'DevOps & CI/CD QA Integration',
        icon: <Cog6ToothIcon className="w-8 h-8 text-white" />,
    },
    {
        title: 'Performance & Security Testing',
        icon: <ShieldCheckIcon className="w-8 h-8 text-white" />,
    },
];

export default function ServicesGrid() {
    return (
        <section className="bg-primary-light dark:bg-primary-dark py-16 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center text-gray-900 dark:text-gray-100">
                {services.map(({ title, icon }) => (
                    <div key={title} className="flex flex-col items-center space-y-3">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                            {icon}
                        </div>
                        <p className="text-lg font-medium">{title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
