
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import React from 'react';
// import GitHubIcon from '@mui/icons-material/GitHub';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';



export default {
    name: 'Rahul Aditya',
    title: 'Full Stack Developer',
    birthday: '21st October 2002',
    email: 'butta.rahul.aditya@gmail.com',
    // address: 'SR Nagar Hyderabad'
    phone: '+91 9505867830',
    address: 'SR Nagar, Hyderabad, Telangana, India',


    links: {
        LinkedIn: {
            link: 'https://www.linkedin.com/in/rahul-aditya/',
            text: 'rahul-aditya',
            icon: React.createElement(LinkedInIcon)
        },
        GitHub: {
            link: 'https://github.com/buttaRahul',
            text: 'buttaRahul',
            icon: React.createElement(GitHubIcon)
        },
    },

    about: "I am a passionate developer with a curiosity for development and Machine Learning! I find joy in creating websites, applications, and I love to learn new things and build cool stuff. I am a fast learner, I'm always looking to make the development process and code better. I enjoy finding simple and elegant solutions for every problem.",
    experiences: [
        {
            title: 'Frontend Development Intern - Profound',
            date: '05/2023 - 08/2023',
            description: 'Customized and tailored user interfaces for Banking application, leveraging React.js, Javascript, Material UI, and Formik and coordinated with cross-functional teams to integrate front-end with back-end using Django',
        },
        {
            title: 'Data Science Intern - YLYTIC',
            date: '11/2022 - 01/2023',
            description: 'Utilized a diverse range of ML models to develop algroithms for predicting user city/location and analyzed text data using NLP techniques and produced statistical insights on products based on users comments data.',
        }
    ],


    education: [
        {
            title: 'Indian Institute of Information Technology(IIIT), Pune',
            date: '10/2020 - Present',
            course: 'B.Tech - CSE',
            grade: 'CGPA : 7.18',

        },
        {
            title: 'Rishi Junior College',
            date: '2018 - 2020',
            course: '12th Telangana State Board',
            grade: 'Percentage :95%',
        },
    ],

    skills: [
        {
            title: 'FRONT-END',
            description: ["ReactJS", "JavaScript", "TypeScript", "Material UI"]
        },
        {
            title: 'BACK-END',
            description: ["Python", "Django", "Django Rest Framework", "NodeJS"]
        },
        {
            title: 'ML/DATA SCIENCE',
            description: ["Tensorflow", "SpaCy , NLTK", "OpenCv", "Pandas",]
        },
        {
            title: 'DATABASES',
            description: ["MySQL", "PostgreSQL"]
        }
    ],

    projects: [
        {
            tag: 'Web Apps',
            image: '../assets/images/postman.png',
            title: 'Postman Clone',
            description: 'Redesigned the Postman application to enhance the user experience for testing API requests, with improved query parameter handling, headers management, and JSON options Using ReactJs and Material UI.',
            tech: ["ReactJs","Material UI"],
            links: [

                { link: 'https://github.com/buttaRahul/postman-clone', icon: React.createElement(GitHubIcon) },
                { link: 'https://postman-clone-buttarahul.netlify.app/', icon:React.createElement(PlayArrowIcon) }

            ]
        },

        {
            tag: 'Web Apps',
            image: '../assets/images/crypto.png',
            title: 'Cryptocurrency Tracker',
            description: 'A Web application for real-time tracking of cryptocurrencies. Users can track the value of cryptocurrencies in real time, allowing them to make informed decisions about buying, selling, or holding assets. Implemented Using ReactJs, Materail UI and ReactchartJS.',
            tech: ["ReactJs","Materail UI", "ReactchartJS"],
            links: [

                { link: 'https://github.com/buttaRahul/react-crypto-tracker', icon: React.createElement(GitHubIcon) },
                { link: 'https://cryptotracker-buttarahul.netlify.app/', icon: React.createElement(PlayArrowIcon) }

            ]
        },
        {
            tag: 'Web Apps',
            image: '../assets/images/cal.png',
            title: 'Emi Calculator',
            description: 'Created a calculator application that helps you to calculate the EMI, monthly interest, and monthly reducing balance based on principal amount, loan tenure, and interest rate. Implemented using React.js and Timeline Component from Materail UI',
            tech:["ReactJS","Material Ui"],
            links: [

                { link: 'https://github.com/buttaRahul/emi-calculator', icon: React.createElement(GitHubIcon) },
                { link: 'https://buttarahul.github.io/emi-calculator/', icon: React.createElement(PlayArrowIcon) }

            ]
        },
        {
            tag: 'Web Apps',
            image: '../assets/images/todo.png',
            title: 'Todo Application',
            description: 'Created a Todo list app that helps you keep track of your daily tasks using Django, ReactJS and Material UI',
            // tech:"Django, ReactJS, Material Ui",
            tech: ["Django","ReactJS","Materail UI"],
            links: [

                { link: 'https://github.com/buttaRahul/full_stack_django_rest_react/tree/main/todo', icon: React.createElement(GitHubIcon) },

            ]
        },
        {
            tag: 'Web Apps',
            image: '../assets/images/dashboard.png',
            title: 'Dashboard',
            description: 'A Responsive React Dashboard created using ReactJS, recharts and SCSS',
            tech:["ReactJS","recharts","SCSS"],
            links: [

                { link: 'https://github.com/buttaRahul/React-Dashboard', icon: React.createElement(GitHubIcon) },
                { link: 'https://react-dashboard-buttarahul.netlify.app/', icon: React.createElement(GitHubIcon) },

            ]
        },
        
        {
            tag: 'Web Apps',
            image: '../assets/images/monitor.png',
            title: 'Applinace Moniter',
            description: 'Appliance Monitor to check the up-time of various appliances. Implemented using ReactJS',
            tech:["ReactJS"],
            links: [

                { link: 'https://github.com/buttaRahul/appliance-monitor', icon: React.createElement(GitHubIcon) },
                { link: 'https://buttarahul.github.io/appliance-monitor/', icon: React.createElement(PlayArrowIcon) },

            ]
        },
        {
            tag: 'Web Apps',
            image: '../assets/images/boxoffice.png',
            title: 'Box office',
            description: 'An application to search movies, actors and a feature to set favourites. Implemented using ReactJS',
            tech:["ReactJS"],
            links: [

                { link: 'https://github.com/buttaRahul/box-office', icon: React.createElement(GitHubIcon) },
                { link: 'https://buttarahul.github.io/box-office/', icon: React.createElement(PlayArrowIcon) },

            ]
        },

        {
            tag: 'Web Apps',
            image: '../assets/images/convert.png',
            title: 'Currency Converter',
            description: 'Simple tool to convert foreign currencies to Indian rupees. Implemented using ReactJS,',
            tech:["ReactJS"],
            links: [

                { link: 'https://github.com/buttaRahul/currency-converter', icon: React.createElement(GitHubIcon) },
                { link: 'https://buttarahul.github.io/currency-converter//', icon: React.createElement(PlayArrowIcon) },

            ]
        },
        {
            tag: 'Web Apps',
            image: '../assets/images/task.png',
            title: 'Task Management System',
            description: 'created a RESTful API for a task management system using Django Rest Framework. The API supports CRUD operations (Create, Read, Update, Delete) for tasks. Implemented using Django Rest Framework',
            tech:["Python","Django","Django-Rest-Framework"],
            links: [

                { link: 'https://github.com/buttaRahul/task_management', icon: React.createElement(GitHubIcon) },
                // { link: 'https://buttarahul.github.io/currency-converter//', icon: React.createElement(PlayArrowIcon) },

            ]
        },
        {
            tag: 'ML/Data Science',
            image: '../assets/images/query.png',
            title: 'Query Assist',
            description: 'An NLP model which can convert Natural Language verbal specifications (in Telugu or English) into SQL queries and executes it against database. Implemented using SpaCy, Gensim, NLTK, speech_recogniton and torchaudio',
            tech:["Python", "SpaCy", "Gensim", "speech_recognition"],
            links: [

                { link: 'https://github.com/buttaRahul/Query-Assist', icon: React.createElement(GitHubIcon) },
                // { link: 'https://buttarahul.github.io/currency-converter//', icon: React.createElement(PlayArrowIcon) },

            ]
        },
        
        {
            tag: 'ML/Data Science',
            image: '../assets/images/mouse.jpg',
            title: 'virtual Mouse',
            description: 'A computer vision program to control your mouse pointer and click using hand gestures.Implented using OpenCV, Mediapipe Landmarks.',
            tech:["OpenCV", "Mediapipe", "pyautogui"],
            links: [

                { link: 'https://github.com/buttaRahul/virtual-mouse', icon: React.createElement(GitHubIcon) },
                // { link: 'https://buttarahul.github.io/currency-converter//', icon: React.createElement(PlayArrowIcon) },

            ]
        },
     
        {
            tag: 'ML/Data Science',
            image: '../assets/images/sentiment.jpg',
            title: 'Twitter Sentiment Analysis',
            description: 'A supervised machine learning model to predect sentiment of tweets ',
            tech:["Scikit-learn", "SpaCy", "NLTK"],
            links: [

                { link: 'https://github.com/buttaRahul/twitter_sentiment_analysis', icon: React.createElement(GitHubIcon) },
                // { link: 'https://buttarahul.github.io/currency-converter//', icon: React.createElement(PlayArrowIcon) },

            ]
        },
        {
            tag: 'ML/Data Science',
            image: '../assets/images/news.png',
            title: 'Fake News Detection',
            description: 'A supervised machine learning model to detect Fake News articles Implemented using scikit-learn, NLTK, BERT-Encoder ',
            tech:["Scikit-learn", "NLTK", "BERT"],
            links: [

                { link: 'https://github.com/buttaRahul/Fake-news-detection', icon: React.createElement(GitHubIcon) },
                // { link: 'https://buttarahul.github.io/currency-converter//', icon: React.createElement(PlayArrowIcon) },

            ]
        },
        {
            tag: 'ML/Data Science',
            image: '../assets/images/park.png',
            title: 'Park Watch',
            description: 'A Deep learning model to count the vehicles parked in open parking areas differentiating from the moving ones. Implemented using tensorflow, OpenCv and Kalman filter.',
            tech:["tensorflow", "openCv", "Kalman Filter"],
            links: [

                { link: 'https://github.com/buttaRahul/ParkWatch', icon: React.createElement(GitHubIcon) },
                // { link: 'https://buttarahul.github.io/currency-converter//', icon: React.createElement(PlayArrowIcon) },

            ]
        },
        {
            tag: 'ML/Data Science',
            image: '../assets/images/road.png',
            title: 'Road Sign Detection',
            description: 'A Deep learning model to detect road signs. Implemented using ultralytics, openCv and YOLOv8',
            tech:["ultralytics", "openCv", "YOLOv8"],
            links: [

                { link: 'https://colab.research.google.com/drive/1vhLn8Q0Bd6Bnmf5IEkuZEqwF_kbG8YLe?usp=sharing', icon: React.createElement(GitHubIcon) },
                // { link: 'https://buttarahul.github.io/currency-converter//', icon: React.createElement(PlayArrowIcon) },

            ]
        },
        {
            tag: 'ML/Data Science',
            image: '../assets/images/noble.png',
            title: 'Noble Prize Data Analysis',
            description: 'A visual history of Noble prize winners Implemented using pandas, seaborn, numpy',
            tech:["pandas", "seaborn", "numpy"],
            links: [

                { link: 'https://github.com/buttaRahul/NoblePrizeDataAnalysis', icon: React.createElement(GitHubIcon) },
                // { link: 'https://buttarahul.github.io/currency-converter//', icon: React.createElement(PlayArrowIcon) },

            ]
        },
        {
            tag: 'ML/Data Science',
            image: '../assets/images/tic.png',
            title: 'Tic-Tac-Toe',
            description: 'A tictactoe game using react. Implemted using ReactJs and Javascript',
            tech: ["ReactJs", "Javascript"],
            links: [

                { link: 'https://github.com/buttaRahul/tictactoe', icon: React.createElement(GitHubIcon) },
                // { link: 'https://buttarahul.github.io/currency-converter//', icon: React.createElement(PlayArrowIcon) },

            ]
        },
        {
            tag: 'ML/Data Science',
            image: '../assets/images/lab.jpg',
            title: 'ML Lab Work',
            description: 'Machine lab work done during ML course duration at IIITP',
            tech:["React", "Javascript", "scss"],
            links: [

                { link: 'https://github.com/buttaRahul/IIITP-ML-Lab', icon: React.createElement(GitHubIcon) },
                // { link: 'https://buttarahul.github.io/currency-converter//', icon: React.createElement(PlayArrowIcon) },

            ]
        },
        {
            tag: 'C++',
            image: '../assets/images/sys.png',
            title: 'System Monitor',
            description: 'A program that monitors system performance and provides real-time information about CPU, memory, and disk usage and alerts for high CPU usage or low disk space. Implemented using C++',
            tech: ["C++"],
            links: [

                { link: 'https://github.com/buttaRahul/system-monitor', icon: React.createElement(GitHubIcon) },
                // { link: 'https://buttarahul.github.io/currency-converter//', icon: React.createElement(PlayArrowIcon) },

            ]
        },
        {
            tag: 'C++',
            image: '../assets/images/gg.png',
            title: 'Ticket Booking System',
            description: 'A simple ticket booking system for movies implemented by using OOPS concepts in C++',
            tech: ["C++"],
            links: [

                { link: 'https://github.com/buttaRahul/Ticket-booking-system', icon: React.createElement(GitHubIcon) },
                // { link: 'https://buttarahul.github.io/currency-converter//', icon: React.createElement(PlayArrowIcon) },

            ]
        },
       
        {
            tag: 'ML/Data Science',
            image: '../assets/images/disease.png',
            title: "Parkinson's Disease Progression Prediction",
            description: "Predicted the progression of Parkinson's Disease by utilizing protein and peptide data measurements from patients provided in a Kaggle Contest. Implemented using Pandas, Seaborn, Scikit-learn and XGBoost",
            tech: ["Pandas", "Seaborn", "Sklearn", "XGBoost"],
            links: [

                { link: 'https://www.kaggle.com/code/adityarahul/eda-linearregression', icon: React.createElement(GitHubIcon) },
                // { link: 'https://buttarahul.github.io/currency-converter//', icon: React.createElement(PlayArrowIcon) },

            ]
        },
        {
            tag: 'ML/Data Science',
            image: '../assets/images/bird.png',
            title: "EDA BirdCLEF",
            description: "Exploratory data analysis (EDA) of audio sounds of different species of birds Implemented using torchaudio, seaborn and librosa",
            tech:["torchaudio", "Seaborn", "librosa"],
            links: [

                { link: 'https://www.kaggle.com/code/adityarahul/edabirdclef', icon: React.createElement(GitHubIcon) },
                // { link: 'https://buttarahul.github.io/currency-converter//', icon: React.createElement(PlayArrowIcon) },

            ]
        },
        {
            tag: 'ML/Data Science',
            image: '../assets/images/movie.png',
            title: "Movie Genre Classification",
            description: "Text Classification problem where I used movie plot summaries to predict movie genres. Implemente using Spacy, NLTK and scikit-learn" ,
            tech:["torchaudio", "Seaborn", "librosa"],
            links: [

                { link: 'https://www.kaggle.com/code/adityarahul/movie-genre-classification', icon: React.createElement(GitHubIcon) },
                // { link: 'https://buttarahul.github.io/currency-converter//', icon: React.createElement(PlayArrowIcon) },

            ]
        },
        {
            tag: 'ML/Data Science',
            image: '../assets/images/disaster.jpg',
            title: "Fake Disaster Tweet Detection",
            description: "A NLP approach to classify a tweet as a Real or Fake Disaster Tweet. Implemented using NLTK and scikit-learn",
            tech: ["NLTK", "Scikit-learn"],
            links: [

                { link: 'https://www.kaggle.com/code/adityarahul/disaster-tweets-prediction-using-nlp', icon: React.createElement(GitHubIcon) },
                // { link: 'https://buttarahul.github.io/currency-converter//', icon: React.createElement(PlayArrowIcon) },

            ]
        },

    
    ]

 
} 