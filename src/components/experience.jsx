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
                    <div className="relative flex flex-col md:flex-row items-center">
                        <div className="w-full md:w-1/2 pr-8 text-left">
                            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-2xl ml-auto">
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">NTT Data</h3>
                                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">Machine Learning Intern</p>
                                <p className="text-sm sm:text-base text-gray-500 dark:text-gray-500">May 2024 - August 2024</p>
                                <ul className="list-disc list-inside mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                                    <li>Developed a Generative Adversarial Network (GAN) to synthetically generate satellite data, enhancing data availability for research.</li>
                                    <li>Conducted data analysis to identify trends and insights from satellite imagery.</li>
                                    <li>Assisted in preparing technical reports and presentations for stakeholders.</li>
                                    <li>Evaluated machine learning models and fine-tuned parameters to optimize results.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="hidden md:block w-1/2 pl-8">
                            <div className="w-6 h-6 bg-gray-500 rounded-full border-4 border-white dark:border-gray-900 absolute left-1/2 transform -translate-x-1/2"></div>
                        </div>
                    </div>
                    <div className="relative flex flex-col md:flex-row items-center">
                        <div className="hidden md:block w-1/2 pr-8">
                            <div className="w-6 h-6 bg-gray-500 rounded-full border-4 border-white dark:border-gray-900 absolute left-1/2 transform -translate-x-1/2"></div>
                        </div>
                        <div className="w-full md:w-1/2 pl-8 text-left">
                            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-2xl mr-auto">
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
                    </div>
                    <div className="relative flex flex-col md:flex-row items-center">
                        <div className="w-full md:w-1/2 pr-8 text-left">
                            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-2xl ml-auto">
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Abbott Laboratories</h3>
                                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">Embedded Software Engineer</p>
                                <p className="text-sm sm:text-base text-gray-500 dark:text-gray-500">May 2022 - December 2022</p>
                                <ul className="list-disc list-inside mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                                    <li>Streamlined and coordinated documentation tasks which resulted in a savings of $100,000 in Q3 & Q4.</li>
                                    <li>Individual contributor who was instrumental in delivering two software key milestone deliveries for a class C implanted artificial heart.</li>
                                    <li>Programmed and debugged C programs and applied MISRA C 2012 Standards</li>
                                    <li>Used tools such as Bitbucket, Git version control, IAR Compiler, and Jira</li>
                                </ul>
                            </div>
                        </div>
                        <div className="hidden md:block w-1/2 pl-8">
                            <div className="w-6 h-6 bg-gray-500 rounded-full border-4 border-white dark:border-gray-900 absolute left-1/2 transform -translate-x-1/2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;