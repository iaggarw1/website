import React from 'react';

const Experience = () => {
    return (
        <section className="p-8 bg-gray-100 dark:bg-gray-900">
            <div className="text-center mb-12">
                <h1 className="text-center text-4xl sm:text-6xl md:text-8xl font-light">Professional Experience</h1>
            </div>
            <div className="relative">
                <div className="border-l-4 border-gray-500 absolute h-full left-1/2 transform -translate-x-1/2"></div>
                <div className="space-y-12">
                    <div className="relative flex items-center">
                        <div className="w-1/2 pr-8 text-right">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">NTT Data</h3>
                            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">Machine Learning Intern</p>
                            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-500">May 2024 - August 2024</p>
                            <ul className="list-disc list-inside mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                                <li>Responsibility 1</li>
                                <li>Responsibility 2</li>
                                <li>Responsibility 3</li>
                            </ul>
                        </div>
                        <div className="w-1/2 pl-8">
                            <div className="w-6 h-6 bg-black rounded-full border-4 border-black dark:border-gray-900 absolute left-1/2 transform -translate-x-1/2"></div>
                        </div>
                    </div>
                    <div className="relative flex items-center">
                        <div className="w-1/2 pr-8">
                            <div className="w-6 h-6 bg-black rounded-full border-4 border-black dark:border-gray-900 absolute left-1/2 transform -translate-x-1/2"></div>
                        </div>
                        <div className="w-1/2 pl-8 text-left">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">University of the Pacific</h3>
                            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">Robotics & AI Research Assistant</p>
                            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-500">January 2024 - May 2024</p>
                            <ul className="list-disc list-inside mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                                <li>Responsibility 1</li>
                                <li>Responsibility 2</li>
                                <li>Responsibility 3</li>
                            </ul>
                        </div>
                    </div>
                    <div className="relative flex items-center">
                        <div className="w-1/2 pr-8 text-right">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Abbott Laboratories</h3>
                            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">Embedded Software Engineer</p>
                            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-500">May 2022 - December 2022</p>
                            <ul className="list-disc list-inside mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                                <li>Responsibility 1</li>
                                <li>Responsibility 2</li>
                                <li>Responsibility 3</li>
                            </ul>
                        </div>
                        <div className="w-1/2 pl-8">
                            <div className="w-6 h-6 bg-black rounded-full border-4 border-black dark:border-gray-900 absolute left-1/2 transform -translate-x-1/2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;