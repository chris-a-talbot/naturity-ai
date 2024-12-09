import React from 'react';

interface StatItem {
    label: string;
    value: string;
    previousValue?: string;
}

interface ProgressStatsProps {
    stats: StatItem[];
    className?: string;
}

export const ProgressStats: React.FC<ProgressStatsProps> = ({
                                                                stats,
                                                                className = ''
                                                            }) => {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${className}`}>
            {stats.map((stat, i) => (
                <div
                    key={stat.label}
                    className="relative group animate-fade-in"
                    style={{ animationDelay: `${i * 100}ms` }}
                >
                    <div className="
            bg-white/50 backdrop-blur-sm rounded-xl p-6
            border border-slate-200/50 shadow-lg
            hover:shadow-xl transition-shadow duration-300
            hover:border-secondary/30
          ">
                        {/* Value */}
                        <div className="relative">
                            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary mb-2 font-familjen">
                                {stat.value}
                            </div>

                            {/* Previous Value Indicator */}
                            {stat.previousValue && stat.previousValue !== stat.value && (
                                <div className="
                  absolute -right-2 -top-2 text-xs font-inter
                  px-2 py-1 rounded-full bg-background
                  border border-slate-200/50
                  text-text-muted
                ">
                                    {stat.value > stat.previousValue ? '↑' : '↓'} {stat.previousValue}
                                </div>
                            )}
                        </div>

                        {/* Label */}
                        <div className="text-text-muted font-inter">
                            {stat.label}
                        </div>

                        {/* Decorative Elements */}
                        <div className="
              absolute inset-0 rounded-xl
              bg-gradient-to-r from-secondary/5 to-primary/5
              opacity-0 group-hover:opacity-100
              transition-opacity duration-300
            " />
                    </div>
                </div>
            ))}

            <style>
                {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fade-in {
            animation: fadeIn 0.5s ease-out forwards;
          }
        `}
            </style>
        </div>
    );
};

// Usage example:
export const CourseProgress: React.FC<{ totalModules: number }> = ({ totalModules }) => {
    const stats = [
        {
            label: 'Completion Rate',
            value: '0%',
            previousValue: '0%'
        },
        {
            label: 'Skills Unlocked',
            value: `1/${totalModules}`,
            previousValue: `0/${totalModules}`
        },
        {
            label: 'Learning Streak',
            value: '3 Days',
            previousValue: '2 Days'
        }
    ];

    return (
        <ProgressStats
            stats={stats}
            className="mt-12"
        />
    );
};