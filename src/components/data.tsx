const machineLearningData = [
  {
    path_id: 1,
    title: "Introduction to Machine Learning",
    description: "Dive into the fascinating world of Machine Learning (ML), where algorithms learn from data to make predictions, uncover patterns, and drive intelligent decision-making. Whether you're a beginner or looking to refine your knowledge, this section covers the essentials of ML, its types, challenges, and real-world applications.",
    topics: [
      {
        id: 1,
        title: "What is Machine Learning?",
        theory: "Machine Learning (ML) is a transformative branch of artificial intelligence (AI) that empowers systems to learn from data and improve over time without explicit programming. By leveraging algorithms, ML uncovers hidden patterns, makes predictions, and automates decision-making. From personalized recommendations on Netflix to self-driving cars, ML is revolutionizing industries worldwide.",
        mcqs: [
          {
            question: "What is the primary goal of Machine Learning?",
            options: [
              "To replace human intelligence",
              "To enable systems to learn from data and make predictions",
              "To create hardware for AI",
              "To design user interfaces",
            ],
            answer: "To enable systems to learn from data and make predictions",
          },
          {
            question: "Which of the following is NOT a type of Machine Learning?",
            options: [
              "Supervised Learning",
              "Unsupervised Learning",
              "Reinforcement Learning",
              "Manual Programming",
            ],
            answer: "Manual Programming",
          },
        ],
      },
      {
        id: 2,
        title: "AI vs ML vs DL for Beginners",
        theory: "Artificial Intelligence (AI) is the overarching field of creating machines that mimic human intelligence. Machine Learning (ML) is a subset of AI, focusing on algorithms that learn from data. Deep Learning (DL), a further subset of ML, uses neural networks with multiple layers to solve complex problems like image and speech recognition. Think of it as AI > ML > DL in terms of hierarchy.",
        mcqs: [
          {
            question: "Which of the following is the correct hierarchy?",
            options: [
              "AI > ML > DL",
              "ML > AI > DL",
              "DL > AI > ML",
              "AI > DL > ML",
            ],
            answer: "AI > ML > DL",
          },
          {
            question: "Deep Learning is best suited for:",
            options: [
              "Simple linear regression",
              "Image and speech recognition",
              "Data preprocessing",
              "Feature scaling",
            ],
            answer: "Image and speech recognition",
          },
        ],
      },
      {
        id: 3,
        title: "Types of Machine Learning",
        theory: "Machine Learning can be broadly categorized into three types: Batch Learning (training on the entire dataset at once), Online Learning (updating models incrementally with new data), and Instance-Based vs Model-Based Learning (using specific examples like k-NN or creating generalized models like linear regression). Each type has its unique strengths and applications.",
        mcqs: [
          {
            question: "Which type of learning updates the model incrementally?",
            options: [
              "Batch Learning",
              "Online Learning",
              "Instance-Based Learning",
              "Model-Based Learning",
            ],
            answer: "Online Learning",
          },
          {
            question: "k-Nearest Neighbors (k-NN) is an example of:",
            options: [
              "Model-Based Learning",
              "Batch Learning",
              "Instance-Based Learning",
              "Online Learning",
            ],
            answer: "Instance-Based Learning",
          },
        ],
      },
      {
        id: 4,
        title: "Challenges in Machine Learning",
        theory: "While Machine Learning offers immense potential, it comes with challenges like poor data quality, overfitting (performing well on training data but poorly on unseen data), underfitting, and high computational costs. Ethical concerns, such as algorithmic bias and data privacy, also pose significant hurdles.",
        mcqs: [
          {
            question: "Which of the following is a common challenge in Machine Learning?",
            options: [
              "Overfitting",
              "Lack of data",
              "High computational cost",
              "All of the above",
            ],
            answer: "All of the above",
          },
          {
            question: "Overfitting occurs when:",
            options: [
              "The model performs well on training data but poorly on unseen data",
              "The model performs poorly on both training and test data",
              "The model is too simple",
              "The model is trained on a small dataset",
            ],
            answer: "The model performs well on training data but poorly on unseen data",
          },
        ],
      },
      {
        id: 5,
        title: "Applications of Machine Learning",
        theory: "Machine Learning is transforming industries with applications like recommendation systems (Netflix, Amazon), fraud detection, healthcare diagnostics, autonomous vehicles, and natural language processing (chatbots, translation). These innovations are reshaping how we live, work, and interact with technology.",
        mcqs: [
          {
            question: "Which of the following is an application of Machine Learning?",
            options: [
              "Fraud detection",
              "Autonomous vehicles",
              "Recommendation systems",
              "All of the above",
            ],
            answer: "All of the above",
          },
          {
            question: "Natural Language Processing (NLP) is used in:",
            options: [
              "Image recognition",
              "Chatbots and translation",
              "Fraud detection",
              "Healthcare diagnostics",
            ],
            answer: "Chatbots and translation",
          },
        ],
      },
      {
        id: 6,
        title: "Machine Learning Development Life Cycle (MLDLC)",
        theory: "The Machine Learning Development Life Cycle (MLDLC) is a structured process that includes problem definition, data collection, preprocessing, model selection, training, evaluation, and deployment. Each stage is crucial for building robust and effective ML models.",
        mcqs: [
          {
            question: "Which of the following is NOT a stage in MLDLC?",
            options: [
              "Data collection",
              "Model deployment",
              "Data visualization",
              "Model evaluation",
            ],
            answer: "Data visualization",
          },
          {
            question: "The first step in MLDLC is:",
            options: [
              "Model training",
              "Problem definition",
              "Data preprocessing",
              "Model deployment",
            ],
            answer: "Problem definition",
          },
        ],
      },
      {
        id: 7,
        title: "Data Engineer vs Data Analyst vs Data Scientist vs ML Engineer",
        theory: "In the data ecosystem, Data Engineers build and maintain data pipelines, Data Analysts extract insights from data, Data Scientists solve complex problems using statistical and ML techniques, and ML Engineers deploy and optimize ML models in production. Each role plays a vital part in the data lifecycle.",
        mcqs: [
          {
            question: "Who is responsible for building data pipelines?",
            options: [
              "Data Scientist",
              "Data Engineer",
              "ML Engineer",
              "Data Analyst",
            ],
            answer: "Data Engineer",
          },
          {
            question: "Which role focuses on deploying ML models in production?",
            options: [
              "Data Analyst",
              "Data Scientist",
              "ML Engineer",
              "Data Engineer",
            ],
            answer: "ML Engineer",
          },
        ],
      },
      {
        id: 8,
        title: "What are Tensors?",
        theory: "Tensors are multi-dimensional arrays that form the backbone of deep learning frameworks like TensorFlow and PyTorch. They enable efficient computation on GPUs and TPUs, making them essential for handling complex data structures in Machine Learning.",
        mcqs: [
          {
            question: "Tensors are primarily used in:",
            options: [
              "Data visualization",
              "Deep Learning frameworks",
              "Data preprocessing",
              "Feature engineering",
            ],
            answer: "Deep Learning frameworks",
          },
          {
            question: "A scalar (single value) is a tensor of rank:",
            options: ["0", "1", "2", "3"],
            answer: "0",
          },
        ],
      },
      {
        id: 9,
        title: "Installing Anaconda for Data Science",
        theory: "Anaconda is a powerful platform for data science and Machine Learning, offering tools like Jupyter Notebook and Google Colab. These interactive environments simplify coding, data analysis, and visualization, making them indispensable for data professionals.",
        mcqs: [
          {
            question: "Which tool is included in Anaconda for interactive coding?",
            options: [
              "Jupyter Notebook",
              "TensorFlow",
              "PyTorch",
              "Scikit-learn",
            ],
            answer: "Jupyter Notebook",
          },
          {
            question: "Google Colab is primarily used for:",
            options: [
              "Data preprocessing",
              "Cloud-based Machine Learning",
              "Data visualization",
              "Feature engineering",
            ],
            answer: "Cloud-based Machine Learning",
          },
        ],
      },
      {
        id: 10,
        title: "How to Frame a Machine Learning Problem",
        theory: "Framing a Machine Learning problem involves defining clear objectives, identifying relevant data, selecting appropriate algorithms, and choosing evaluation metrics. A well-structured problem ensures that the ML model aligns with the desired outcomes and delivers actionable insights.",
        mcqs: [
          {
            question: "The first step in framing an ML problem is:",
            options: [
              "Selecting the algorithm",
              "Defining the objective",
              "Collecting data",
              "Evaluating the model",
            ],
            answer: "Defining the objective",
          },
          {
            question: "Which of the following is NOT a step in framing an ML problem?",
            options: [
              "Identifying input data",
              "Selecting evaluation metrics",
              "Writing code",
              "Defining the objective",
            ],
            answer: "Writing code",
          },
        ],
      },
    ],
  },

  {
    "path_id": 2,
    "title": "Data Preprocessing",
    "description": "Data preprocessing is a crucial step in the Machine Learning pipeline, where raw data is transformed into a clean and usable format. This module covers various techniques and tools for handling data formats, exploratory data analysis, encoding, transformations, and handling missing data. By mastering these skills, you'll be able to prepare your data effectively for Machine Learning models.",
    "topics": [
      {
        "id": 1,
        "title": "Working with Data Formats",
        "theory": "Data comes in various formats such as CSV, JSON, SQL, and more. Understanding how to work with these formats is essential for data preprocessing. This section covers how to read and manipulate data from CSV files, JSON/SQL databases, fetch data from APIs, and perform web scraping to collect data from the web.",
        "mcqs": [
          {
            "question": "Which of the following is NOT a common data format?",
            "options": [
              "CSV",
              "JSON",
              "SQL",
              "XML",
              "HTML"
            ],
            "answer": "HTML"
          },
          {
            "question": "What is the primary purpose of web scraping?",
            "options": [
              "To clean data",
              "To collect data from the web",
              "To encode categorical data",
              "To handle missing data"
            ],
            "answer": "To collect data from the web"
          }
        ]
      },
      {
        "id": 2,
        "title": "Understanding Your Data",
        "theory": "Before applying any Machine Learning algorithms, it's crucial to understand the data you're working with. Exploratory Data Analysis (EDA) helps in uncovering patterns, spotting anomalies, and understanding the relationships between variables. This section covers univariate, bivariate, and multivariate analysis, along with tools like Pandas Profiling for automated EDA.",
        "mcqs": [
          {
            "question": "What is the main goal of Exploratory Data Analysis (EDA)?",
            "options": [
              "To build Machine Learning models",
              "To clean data",
              "To understand the data and uncover patterns",
              "To encode categorical data"
            ],
            "answer": "To understand the data and uncover patterns"
          },
          {
            "question": "Which of the following is a tool for automated EDA?",
            "options": [
              "Pandas Profiling",
              "Scikit-learn",
              "TensorFlow",
              "PyTorch"
            ],
            "answer": "Pandas Profiling"
          }
        ]
      },
      {
        "id": 3,
        "title": "Column Transformer in Machine Learning",
        "theory": "Column Transformer is a powerful tool in scikit-learn that allows you to apply different preprocessing steps to different columns of your dataset. This is particularly useful when dealing with datasets that have a mix of numerical and categorical features.",
        "mcqs": [
          {
            "question": "What is the primary use of Column Transformer?",
            "options": [
              "To handle missing data",
              "To apply different preprocessing steps to different columns",
              "To perform EDA",
              "To encode categorical data"
            ],
            "answer": "To apply different preprocessing steps to different columns"
          },
          {
            "question": "Which library provides the Column Transformer?",
            "options": [
              "TensorFlow",
              "PyTorch",
              "Scikit-learn",
              "Pandas"
            ],
            "answer": "Scikit-learn"
          }
        ]
      },
      {
        "id": 4,
        "title": "Encoding Categorical Data",
        "theory": "Categorical data needs to be converted into numerical format before it can be used in Machine Learning models. This section covers various encoding techniques such as Ordinal Encoding, Label Encoding, and One Hot Encoding, each with its own use cases and advantages.",
        "mcqs": [
          {
            "question": "Which encoding technique is suitable for ordinal categorical data?",
            "options": [
              "One Hot Encoding",
              "Label Encoding",
              "Ordinal Encoding",
              "Binary Encoding"
            ],
            "answer": "Ordinal Encoding"
          },
          {
            "question": "What is the main disadvantage of One Hot Encoding?",
            "options": [
              "It cannot handle missing data",
              "It increases the dimensionality of the dataset",
              "It is computationally expensive",
              "It is not suitable for ordinal data"
            ],
            "answer": "It increases the dimensionality of the dataset"
          }
        ]
      },
      {
        "id": 5,
        "title": "Machine Learning Pipelines",
        "theory": "Machine Learning pipelines streamline the process of transforming data and building models. They allow you to chain multiple preprocessing steps and model training into a single workflow, making the process more efficient and reproducible.",
        "mcqs": [
          {
            "question": "What is the primary benefit of using Machine Learning pipelines?",
            "options": [
              "They reduce the need for data preprocessing",
              "They make the process more efficient and reproducible",
              "They automatically select the best model",
              "They handle missing data automatically"
            ],
            "answer": "They make the process more efficient and reproducible"
          },
          {
            "question": "Which library is commonly used to create Machine Learning pipelines?",
            "options": [
              "TensorFlow",
              "PyTorch",
              "Scikit-learn",
              "Pandas"
            ],
            "answer": "Scikit-learn"
          }
        ]
      },
      {
        "id": 6,
        "title": "Transformations",
        "theory": "Transformations are applied to data to make it more suitable for Machine Learning models. This section covers various transformation techniques such as Function Transformer (Log, Reciprocal, Square Root), Power Transformer (Box-Cox, Yeo-Johnson), Binning, and Binarization.",
        "mcqs": [
          {
            "question": "Which transformation is used to stabilize variance and make data more normally distributed?",
            "options": [
              "Log Transformation",
              "Square Root Transformation",
              "Box-Cox Transformation",
              "Binning"
            ],
            "answer": "Box-Cox Transformation"
          },
          {
            "question": "What is the purpose of Binning?",
            "options": [
              "To reduce the dimensionality of the data",
              "To group continuous data into discrete bins",
              "To handle missing data",
              "To encode categorical data"
            ],
            "answer": "To group continuous data into discrete bins"
          }
        ]
      },
      {
        "id": 7,
        "title": "Handling Mixed Variables",
        "theory": "Mixed variables contain both numerical and categorical data. Handling such variables requires special techniques to ensure that both types of data are properly processed and used in Machine Learning models.",
        "mcqs": [
          {
            "question": "What is a mixed variable?",
            "options": [
              "A variable that contains only numerical data",
              "A variable that contains only categorical data",
              "A variable that contains both numerical and categorical data",
              "A variable that contains missing data"
            ],
            "answer": "A variable that contains both numerical and categorical data"
          },
          {
            "question": "Which technique is commonly used to handle mixed variables?",
            "options": [
              "One Hot Encoding",
              "Column Transformer",
              "Binning",
              "Log Transformation"
            ],
            "answer": "Column Transformer"
          }
        ]
      },
      {
        "id": 8,
        "title": "Handling Date and Time Variables",
        "theory": "Date and time variables are common in many datasets and require special handling. This section covers techniques for extracting useful features from date and time variables, such as day of the week, month, year, and time differences.",
        "mcqs": [
          {
            "question": "Which of the following is a common feature extracted from date variables?",
            "options": [
              "Day of the week",
              "Mean of the data",
              "Standard deviation",
              "Variance"
            ],
            "answer": "Day of the week"
          },
          {
            "question": "What is the primary purpose of handling date and time variables?",
            "options": [
              "To reduce the dimensionality of the data",
              "To extract useful features for Machine Learning models",
              "To handle missing data",
              "To encode categorical data"
            ],
            "answer": "To extract useful features for Machine Learning models"
          }
        ]
      },
      {
        "id": 9,
        "title": "Handling Missing Data",
        "theory": "Missing data is a common issue in datasets and can significantly impact the performance of Machine Learning models. This section covers various techniques for handling missing data, including Complete Case Analysis, Simple Imputer, Missing Indicator, Random Sample Imputation, KNN Imputer, and Multivariate Imputation by Chained Equations (MICE).",
        "mcqs": [
          {
            "question": "Which technique involves removing rows with missing data?",
            "options": [
              "Simple Imputer",
              "Complete Case Analysis",
              "KNN Imputer",
              "MICE"
            ],
            "answer": "Complete Case Analysis"
          },
          {
            "question": "What is the main advantage of using KNN Imputer?",
            "options": [
              "It is computationally inexpensive",
              "It uses the nearest neighbors to impute missing values",
              "It removes rows with missing data",
              "It is only suitable for categorical data"
            ],
            "answer": "It uses the nearest neighbors to impute missing values"
          }
        ]
      }
    ]
  },

  {
    "path_id": 3,
    "title": "Regression Techniques",
    "description": "Explore the foundational techniques of regression in Machine Learning, which are essential for predicting continuous outcomes. This module covers various regression methods, their mathematical formulations, coding implementations, and evaluation metrics. Whether you're predicting house prices or analyzing trends, regression techniques are a cornerstone of data science.",
    "topics": [
      {
        "id": 1,
        "title": "Simple Linear Regression",
        "theory": "Simple Linear Regression models the relationship between a single independent variable and a dependent variable using a linear approach. The mathematical formulation involves finding the best-fit line that minimizes the sum of squared errors between the predicted and actual values. Coding from scratch helps in understanding the underlying mechanics of the algorithm.",
        "mcqs": [
          {
            "question": "What is the primary goal of Simple Linear Regression?",
            "options": [
              "To classify data into categories",
              "To model the relationship between two variables using a linear approach",
              "To cluster data points",
              "To reduce dimensionality"
            ],
            "answer": "To model the relationship between two variables using a linear approach"
          },
          {
            "question": "Which of the following is minimized in Simple Linear Regression?",
            "options": [
              "Sum of absolute errors",
              "Sum of squared errors",
              "Variance of the data",
              "Mean of the data"
            ],
            "answer": "Sum of squared errors"
          }
        ]
      },
      {
        "id": 2,
        "title": "Regression Metrics",
        "theory": "Evaluating regression models requires specific metrics such as Mean Squared Error (MSE), Mean Absolute Error (MAE), Root Mean Squared Error (RMSE), R2 Score, and Adjusted R2 Score. These metrics help in assessing the accuracy and performance of the regression models.",
        "mcqs": [
          {
            "question": "Which metric is sensitive to outliers?",
            "options": [
              "Mean Absolute Error (MAE)",
              "Mean Squared Error (MSE)",
              "R2 Score",
              "Adjusted R2 Score"
            ],
            "answer": "Mean Squared Error (MSE)"
          },
          {
            "question": "What does an R2 Score of 1 indicate?",
            "options": [
              "The model explains none of the variability",
              "The model explains all the variability",
              "The model is underfitting",
              "The model is overfitting"
            ],
            "answer": "The model explains all the variability"
          }
        ]
      },
      {
        "id": 3,
        "title": "Multiple Linear Regression",
        "theory": "Multiple Linear Regression extends Simple Linear Regression by incorporating multiple independent variables. The geometric intuition involves fitting a hyperplane in a multi-dimensional space. The mathematical formulation and coding from scratch provide a deeper understanding of the model's complexity.",
        "mcqs": [
          {
            "question": "What is the main difference between Simple and Multiple Linear Regression?",
            "options": [
              "Multiple Linear Regression uses multiple independent variables",
              "Simple Linear Regression uses multiple dependent variables",
              "Multiple Linear Regression is non-linear",
              "Simple Linear Regression is used for classification"
            ],
            "answer": "Multiple Linear Regression uses multiple independent variables"
          },
          {
            "question": "In Multiple Linear Regression, the relationship is modeled as a:",
            "options": [
              "Line",
              "Plane",
              "Hyperplane",
              "Curve"
            ],
            "answer": "Hyperplane"
          }
        ]
      },
      {
        "id": 4,
        "title": "Gradient Descent",
        "theory": "Gradient Descent is an optimization algorithm used to minimize the cost function in regression models. It comes in three variants: Batch Gradient Descent (updates parameters using the entire dataset), Stochastic Gradient Descent (updates parameters using a single data point), and Mini-Batch Gradient Descent (updates parameters using a subset of the dataset).",
        "mcqs": [
          {
            "question": "Which variant of Gradient Descent updates parameters using the entire dataset?",
            "options": [
              "Batch Gradient Descent",
              "Stochastic Gradient Descent",
              "Mini-Batch Gradient Descent",
              "None of the above"
            ],
            "answer": "Batch Gradient Descent"
          },
          {
            "question": "Stochastic Gradient Descent is generally:",
            "options": [
              "Slower but more accurate",
              "Faster but less accurate",
              "Slower and less accurate",
              "Faster and more accurate"
            ],
            "answer": "Faster but less accurate"
          }
        ]
      },
      {
        "id": 5,
        "title": "Polynomial Regression",
        "theory": "Polynomial Regression models the relationship between the independent and dependent variables as an nth degree polynomial. It is useful for capturing non-linear relationships in the data.",
        "mcqs": [
          {
            "question": "Polynomial Regression is used when:",
            "options": [
              "The relationship between variables is linear",
              "The relationship between variables is non-linear",
              "There are no relationships between variables",
              "The data is categorical"
            ],
            "answer": "The relationship between variables is non-linear"
          },
          {
            "question": "Which of the following is a potential issue with Polynomial Regression?",
            "options": [
              "Underfitting",
              "Overfitting",
              "High bias",
              "Low variance"
            ],
            "answer": "Overfitting"
          }
        ]
      },
      {
        "id": 6,
        "title": "Bias-Variance Tradeoff",
        "theory": "The Bias-Variance Tradeoff is a fundamental concept in Machine Learning that deals with the tradeoff between a model's ability to minimize bias and variance. High bias can lead to underfitting, while high variance can lead to overfitting. Balancing these two is crucial for building robust models.",
        "mcqs": [
          {
            "question": "High bias in a model typically leads to:",
            "options": [
              "Overfitting",
              "Underfitting",
              "High variance",
              "Low error on training data"
            ],
            "answer": "Underfitting"
          },
          {
            "question": "Which of the following is a way to reduce variance in a model?",
            "options": [
              "Increasing model complexity",
              "Decreasing model complexity",
              "Using more features",
              "Using a smaller dataset"
            ],
            "answer": "Decreasing model complexity"
          }
        ]
      },
      {
        "id": 7,
        "title": "Regularized Linear Models",
        "theory": "Regularized Linear Models introduce a penalty term to the cost function to prevent overfitting. Ridge Regression adds L2 regularization, Lasso Regression adds L1 regularization, and ElasticNet Regression combines both L1 and L2 regularization.",
        "mcqs": [
          {
            "question": "Which regularization method adds the absolute value of coefficients to the cost function?",
            "options": [
              "Ridge Regression",
              "Lasso Regression",
              "ElasticNet Regression",
              "None of the above"
            ],
            "answer": "Lasso Regression"
          },
          {
            "question": "ElasticNet Regression combines which two regularization methods?",
            "options": [
              "L1 and L2",
              "L1 and L3",
              "L2 and L3",
              "None of the above"
            ],
            "answer": "L1 and L2"
          }
        ]
      }
    ]
  },

  {
    "path_id": 4,
    "title": "Classification Techniques",
    "description": "Explore the core concepts and techniques of classification in Machine Learning. This module covers various algorithms, metrics, and strategies used to classify data into distinct categories. From Logistic Regression to Decision Trees, you'll gain a comprehensive understanding of how to build and evaluate classification models.",
    "topics": [
      {
        "id": 1,
        "title": "Logistic Regression",
        "theory": "Logistic Regression is a fundamental classification algorithm used to predict binary outcomes. It employs the Perceptron Trick, Sigmoid Function, and Binary Cross Entropy Loss Function to optimize predictions. Gradient Descent is used to minimize the loss and improve model accuracy.",
        "mcqs": [
          {
            "question": "What is the primary use of Logistic Regression?",
            "options": [
              "Predicting continuous values",
              "Classifying data into binary categories",
              "Clustering data",
              "Dimensionality reduction"
            ],
            "answer": "Classifying data into binary categories"
          },
          {
            "question": "Which function is used in Logistic Regression to map predictions to probabilities?",
            "options": [
              "ReLU",
              "Sigmoid",
              "Tanh",
              "Softmax"
            ],
            "answer": "Sigmoid"
          }
        ]
      },
      {
        "id": 2,
        "title": "Classification Metrics",
        "theory": "Evaluating classification models requires specific metrics like Accuracy, Confusion Matrix, Precision, Recall, and F1 Score. These metrics help assess the model's performance, balance between false positives and false negatives, and overall effectiveness in classification tasks.",
        "mcqs": [
          {
            "question": "Which metric is used to measure the proportion of true positives among all positive predictions?",
            "options": [
              "Accuracy",
              "Precision",
              "Recall",
              "F1 Score"
            ],
            "answer": "Precision"
          },
          {
            "question": "What does the F1 Score represent?",
            "options": [
              "The harmonic mean of Precision and Recall",
              "The arithmetic mean of Precision and Recall",
              "The difference between Precision and Recall",
              "The ratio of true positives to false negatives"
            ],
            "answer": "The harmonic mean of Precision and Recall"
          }
        ]
      },
      {
        "id": 3,
        "title": "Softmax Regression (Multinomial Logistic Regression)",
        "theory": "Softmax Regression, also known as Multinomial Logistic Regression, extends Logistic Regression to handle multiple classes. It uses the Softmax function to predict probabilities for each class, making it suitable for multi-class classification problems.",
        "mcqs": [
          {
            "question": "What is the primary use of Softmax Regression?",
            "options": [
              "Binary classification",
              "Multi-class classification",
              "Regression tasks",
              "Clustering"
            ],
            "answer": "Multi-class classification"
          },
          {
            "question": "Which function is used in Softmax Regression to predict probabilities for multiple classes?",
            "options": [
              "Sigmoid",
              "ReLU",
              "Softmax",
              "Tanh"
            ],
            "answer": "Softmax"
          }
        ]
      },
      {
        "id": 4,
        "title": "Polynomial Features in Logistic Regression",
        "theory": "Polynomial Features enhance Logistic Regression by introducing non-linear relationships between features. This technique allows the model to capture more complex patterns in the data, improving its predictive power.",
        "mcqs": [
          {
            "question": "What is the purpose of using Polynomial Features in Logistic Regression?",
            "options": [
              "To reduce overfitting",
              "To introduce non-linear relationships",
              "To speed up training",
              "To reduce the number of features"
            ],
            "answer": "To introduce non-linear relationships"
          },
          {
            "question": "Which of the following is a potential drawback of using Polynomial Features?",
            "options": [
              "Increased model complexity",
              "Reduced model accuracy",
              "Slower training time",
              "All of the above"
            ],
            "answer": "Increased model complexity"
          }
        ]
      },
      {
        "id": 5,
        "title": "Decision Trees",
        "theory": "Decision Trees are versatile algorithms used for both classification and regression tasks. They split data based on features, using criteria like Entropy, Gini Impurity, and Information Gain to make decisions. Hyperparameters like tree depth and minimum samples per leaf control the model's complexity.",
        "mcqs": [
          {
            "question": "What is the primary criterion used to split data in Decision Trees?",
            "options": [
              "Mean Squared Error",
              "Information Gain",
              "R-squared",
              "Variance"
            ],
            "answer": "Information Gain"
          },
          {
            "question": "Which of the following is a hyperparameter in Decision Trees?",
            "options": [
              "Entropy",
              "Gini Impurity",
              "Tree depth",
              "Information Gain"
            ],
            "answer": "Tree depth"
          }
        ]
      },
      {
        "id": 6,
        "title": "Regression Trees",
        "theory": "Regression Trees are a variant of Decision Trees used for predicting continuous values. They split data based on features and use the mean value of the target variable in each leaf node to make predictions. Regression Trees are useful for handling non-linear relationships in data.",
        "mcqs": [
          {
            "question": "What is the primary use of Regression Trees?",
            "options": [
              "Classification tasks",
              "Predicting continuous values",
              "Clustering",
              "Dimensionality reduction"
            ],
            "answer": "Predicting continuous values"
          },
          {
            "question": "How do Regression Trees make predictions?",
            "options": [
              "By using the mean value of the target variable in each leaf node",
              "By using the median value of the target variable in each leaf node",
              "By using the mode value of the target variable in each leaf node",
              "By using the maximum value of the target variable in each leaf node"
            ],
            "answer": "By using the mean value of the target variable in each leaf node"
          }
        ]
      }
    ]
  },

  {
    "path_id": 5,
    "title": "Clustering Algorithms",
    "description": "Explore the world of clustering algorithms, which are essential for unsupervised learning tasks. This module covers popular clustering techniques like K-Means, Hierarchical Clustering, DBSCAN, and more, along with their geometric intuition, Python implementations, and practical applications.",
    "topics": [
      {
        "id": 1,
        "title": "K-Means Clustering",
        "theory": "K-Means Clustering is a popular unsupervised learning algorithm used to partition data into K distinct clusters. It works by iteratively assigning data points to the nearest cluster centroid and updating the centroids based on the mean of the assigned points. The algorithm aims to minimize the within-cluster variance, making it effective for grouping similar data points.",
        "subtopics": [
          {
            "title": "Geometric Intuition",
            "theory": "K-Means can be understood geometrically as finding the centroids of clusters such that the sum of squared distances between each point and its centroid is minimized. The algorithm converges when the centroids no longer change significantly."
          },
          {
            "title": "Python Implementation",
            "theory": "Using libraries like Scikit-learn, K-Means can be implemented in just a few lines of code. The algorithm requires specifying the number of clusters (K) and can handle large datasets efficiently."
          },
          {
            "title": "From Scratch Implementation",
            "theory": "Implementing K-Means from scratch involves initializing centroids, assigning points to clusters, updating centroids, and repeating the process until convergence. This helps in understanding the underlying mechanics of the algorithm."
          }
        ],
        "mcqs": [
          {
            "question": "What is the primary goal of K-Means Clustering?",
            "options": [
              "To classify data into predefined labels",
              "To minimize the within-cluster variance",
              "To maximize the distance between clusters",
              "To reduce the dimensionality of data"
            ],
            "answer": "To minimize the within-cluster variance"
          },
          {
            "question": "Which of the following is a key step in K-Means?",
            "options": [
              "Updating centroids based on the mean of assigned points",
              "Calculating the gradient descent",
              "Applying the kernel trick",
              "Performing feature scaling"
            ],
            "answer": "Updating centroids based on the mean of assigned points"
          }
        ]
      },
      {
        "id": 2,
        "title": "Hierarchical Clustering",
        "theory": "Hierarchical Clustering is a method of cluster analysis that builds a hierarchy of clusters. It can be either agglomerative (bottom-up) or divisive (top-down). Agglomerative clustering starts with each data point as a separate cluster and merges them iteratively, while divisive clustering starts with all points in one cluster and splits them recursively.",
        "mcqs": [
          {
            "question": "Which of the following is true about Hierarchical Clustering?",
            "options": [
              "It requires specifying the number of clusters in advance",
              "It builds a hierarchy of clusters",
              "It is only applicable to small datasets",
              "It uses the kernel trick"
            ],
            "answer": "It builds a hierarchy of clusters"
          },
          {
            "question": "Agglomerative clustering is a:",
            "options": [
              "Top-down approach",
              "Bottom-up approach",
              "Divisive approach",
              "Non-hierarchical approach"
            ],
            "answer": "Bottom-up approach"
          }
        ]
      },
      {
        "id": 3,
        "title": "Agglomerative Clustering",
        "theory": "Agglomerative Clustering is a type of hierarchical clustering where each data point starts as its own cluster, and pairs of clusters are merged as one moves up the hierarchy. The process continues until all points are in a single cluster or a specified number of clusters is reached. Common linkage criteria include single, complete, and average linkage.",
        "mcqs": [
          {
            "question": "What is the starting point of Agglomerative Clustering?",
            "options": [
              "All points in one cluster",
              "Each point as a separate cluster",
              "Randomly selected centroids",
              "Predefined clusters"
            ],
            "answer": "Each point as a separate cluster"
          },
          {
            "question": "Which of the following is a linkage criterion in Agglomerative Clustering?",
            "options": [
              "Single linkage",
              "Complete linkage",
              "Average linkage",
              "All of the above"
            ],
            "answer": "All of the above"
          }
        ]
      },
      {
        "id": 4,
        "title": "DBSCAN Clustering",
        "theory": "DBSCAN (Density-Based Spatial Clustering of Applications with Noise) is a density-based clustering algorithm that groups together points that are closely packed, marking points in low-density regions as outliers. It does not require specifying the number of clusters and can find arbitrarily shaped clusters.",
        "mcqs": [
          {
            "question": "What is a key advantage of DBSCAN over K-Means?",
            "options": [
              "It requires specifying the number of clusters",
              "It can find arbitrarily shaped clusters",
              "It is faster for large datasets",
              "It uses the kernel trick"
            ],
            "answer": "It can find arbitrarily shaped clusters"
          },
          {
            "question": "DBSCAN stands for:",
            "options": [
              "Density-Based Spatial Clustering of Applications with Noise",
              "Distance-Based Spatial Clustering of Applications with Noise",
              "Density-Based Statistical Clustering of Applications with Noise",
              "Distance-Based Statistical Clustering of Applications with Noise"
            ],
            "answer": "Density-Based Spatial Clustering of Applications with Noise"
          }
        ]
      },
      {
        "id": 5,
        "title": "Support Vector Machines (SVM)",
        "theory": "Support Vector Machines (SVM) are supervised learning models used for classification and regression tasks. SVMs find the optimal hyperplane that separates data points of different classes with the maximum margin. They can handle linear and non-linear data using the kernel trick.",
        "subtopics": [
          {
            "title": "Geometric Intuition",
            "theory": "The geometric intuition behind SVM is to find the hyperplane that maximizes the margin between the closest points of different classes, known as support vectors. This ensures better generalization to unseen data."
          },
          {
            "title": "Hard Margin and Soft Margin SVM",
            "theory": "Hard Margin SVM aims to find a hyperplane that perfectly separates the classes, while Soft Margin SVM allows for some misclassifications to handle noisy data. The trade-off is controlled by the regularization parameter C."
          },
          {
            "title": "Kernel Trick",
            "theory": "The kernel trick allows SVM to handle non-linear data by mapping the input space into a higher-dimensional feature space where a linear separator can be found. Common kernels include linear, polynomial, and radial basis function (RBF)."
          }
        ],
        "mcqs": [
          {
            "question": "What is the goal of SVM?",
            "options": [
              "To minimize the within-cluster variance",
              "To maximize the margin between classes",
              "To reduce the dimensionality of data",
              "To perform density-based clustering"
            ],
            "answer": "To maximize the margin between classes"
          },
          {
            "question": "Which of the following is a kernel used in SVM?",
            "options": [
              "Linear",
              "Polynomial",
              "RBF",
              "All of the above"
            ],
            "answer": "All of the above"
          }
        ]
      },
      {
        "id": 6,
        "title": "K-Nearest Neighbors (KNN)",
        "theory": "K-Nearest Neighbors (KNN) is a simple, instance-based learning algorithm used for classification and regression. It works by finding the K closest training examples in the feature space and predicting the output based on their labels (for classification) or values (for regression).",
        "mcqs": [
          {
            "question": "What is the primary assumption behind KNN?",
            "options": [
              "Data points are linearly separable",
              "Similar data points are close to each other in feature space",
              "Data points are normally distributed",
              "Data points are independent of each other"
            ],
            "answer": "Similar data points are close to each other in feature space"
          },
          {
            "question": "In KNN, the choice of K affects:",
            "options": [
              "The complexity of the model",
              "The bias-variance trade-off",
              "The speed of the algorithm",
              "All of the above"
            ],
            "answer": "All of the above"
          }
        ]
      }
    ]
  },

  {
    "path_id": 6,
    "title": "Dimensionality Reduction",
    "description": "Dimensionality reduction is a crucial technique in Machine Learning that helps in reducing the number of random variables under consideration, by obtaining a set of principal variables. This module covers the fundamental concepts, techniques, and applications of dimensionality reduction, including the Curse of Dimensionality and Principal Component Analysis (PCA).",
    "topics": [
      {
        "id": 1,
        "title": "Curse of Dimensionality",
        "theory": "The Curse of Dimensionality refers to various phenomena that arise when analyzing data in high-dimensional spaces, often counter-intuitive to low-dimensional settings. As the number of features or dimensions grows, the amount of data needed to generalize accurately grows exponentially. This can lead to issues such as increased computational complexity, overfitting, and reduced model performance.",
        "mcqs": [
          {
            "question": "What is the primary issue caused by the Curse of Dimensionality?",
            "options": [
              "Decreased computational complexity",
              "Increased computational complexity",
              "Reduced overfitting",
              "Improved model performance"
            ],
            "answer": "Increased computational complexity"
          },
          {
            "question": "Which of the following is a consequence of the Curse of Dimensionality?",
            "options": [
              "Easier data visualization",
              "Reduced need for data",
              "Increased risk of overfitting",
              "Simpler model training"
            ],
            "answer": "Increased risk of overfitting"
          }
        ]
      },
      {
        "id": 2,
        "title": "Principal Component Analysis (PCA)",
        "theory": "Principal Component Analysis (PCA) is a statistical procedure that uses an orthogonal transformation to convert a set of observations of possibly correlated variables into a set of values of linearly uncorrelated variables called principal components. This technique is widely used for dimensionality reduction, noise reduction, and feature extraction.",
        "mcqs": [
          {
            "question": "What is the main purpose of PCA?",
            "options": [
              "To increase the number of features",
              "To reduce dimensionality",
              "To increase model complexity",
              "To introduce noise into the data"
            ],
            "answer": "To reduce dimensionality"
          },
          {
            "question": "Which of the following is a use case for PCA?",
            "options": [
              "Increasing model overfitting",
              "Noise reduction",
              "Increasing computational complexity",
              "Adding more features to the dataset"
            ],
            "answer": "Noise reduction"
          }
        ]
      },
      {
        "id": 3,
        "title": "Geometric Intuition",
        "theory": "The geometric intuition behind PCA involves understanding how data points are projected onto lower-dimensional subspaces. PCA seeks to find the directions (principal components) that maximize the variance in the data. The first principal component is the direction of maximum variance, the second principal component is the direction of the next highest variance, and so on, all while being orthogonal to the previous components.",
        "mcqs": [
          {
            "question": "What does the first principal component represent?",
            "options": [
              "The direction of minimum variance",
              "The direction of maximum variance",
              "The mean of the data",
              "The median of the data"
            ],
            "answer": "The direction of maximum variance"
          },
          {
            "question": "How are principal components oriented relative to each other?",
            "options": [
              "Parallel",
              "Orthogonal",
              "Randomly",
              "Inversely"
            ],
            "answer": "Orthogonal"
          }
        ]
      },
      {
        "id": 4,
        "title": "Problem Formulation",
        "theory": "The problem formulation of PCA involves expressing the data in terms of its principal components. This is achieved by solving an eigenvalue problem where the eigenvectors represent the principal components, and the eigenvalues represent the amount of variance captured by each component. The goal is to transform the original data into a new coordinate system defined by these principal components.",
        "mcqs": [
          {
            "question": "What do the eigenvalues in PCA represent?",
            "options": [
              "The mean of the data",
              "The variance captured by each principal component",
              "The number of data points",
              "The correlation between features"
            ],
            "answer": "The variance captured by each principal component"
          },
          {
            "question": "What is the goal of transforming data using PCA?",
            "options": [
              "To increase the number of features",
              "To reduce the dimensionality while preserving variance",
              "To introduce noise into the data",
              "To make the data more complex"
            ],
            "answer": "To reduce the dimensionality while preserving variance"
          }
        ]
      }
    ]
  },

  {
    "path_id": 7,
    "title": "Model Evaluation & Tuning",
    "description": "Learn the essential techniques for evaluating and fine-tuning machine learning models to ensure optimal performance. This module covers hyperparameter tuning, out-of-bag evaluation, and feature importance in Random Forest, providing you with the tools to build robust and accurate models.",
    "topics": [
      {
        "id": 1,
        "title": "Hyperparameter Tuning",
        "theory": "Hyperparameter tuning is the process of finding the optimal set of hyperparameters for a machine learning model to achieve the best performance. Two popular methods for hyperparameter tuning are GridSearchCV and RandomizedSearchCV. GridSearchCV exhaustively searches through a specified parameter grid, while RandomizedSearchCV samples a fixed number of parameter settings from specified distributions.",
        "mcqs": [
          {
            "question": "What is the primary goal of hyperparameter tuning?",
            "options": [
              "To reduce the size of the dataset",
              "To find the optimal set of hyperparameters for a model",
              "To increase the complexity of the model",
              "To visualize the data"
            ],
            "answer": "To find the optimal set of hyperparameters for a model"
          },
          {
            "question": "Which method exhaustively searches through a specified parameter grid?",
            "options": [
              "RandomizedSearchCV",
              "GridSearchCV",
              "Cross-Validation",
              "Bootstrap Aggregating"
            ],
            "answer": "GridSearchCV"
          }
        ]
      },
      {
        "id": 2,
        "title": "Out-of-Bag (OOB) Evaluation in Random Forest",
        "theory": "Out-of-Bag (OOB) evaluation is a method used to estimate the generalization error of a Random Forest model. Since each tree in a Random Forest is trained on a bootstrap sample of the data, some samples are left out (out-of-bag). These OOB samples can be used to evaluate the model's performance without the need for a separate validation set.",
        "mcqs": [
          {
            "question": "What is the purpose of Out-of-Bag (OOB) evaluation?",
            "options": [
              "To reduce the number of trees in the forest",
              "To estimate the generalization error of a Random Forest model",
              "To increase the training time",
              "To visualize the feature importance"
            ],
            "answer": "To estimate the generalization error of a Random Forest model"
          },
          {
            "question": "Which samples are used for OOB evaluation?",
            "options": [
              "All training samples",
              "Samples left out during bootstrap sampling",
              "Samples from the test set",
              "Samples from a separate validation set"
            ],
            "answer": "Samples left out during bootstrap sampling"
          }
        ]
      },
      {
        "id": 3,
        "title": "Feature Importance in Random Forest",
        "theory": "Feature importance in Random Forest is a measure of the contribution of each feature to the model's predictions. It is calculated based on the decrease in impurity (e.g., Gini impurity or entropy) that each feature provides when used in the trees. Features with higher importance scores have a greater impact on the model's decision-making process.",
        "mcqs": [
          {
            "question": "What does feature importance in Random Forest measure?",
            "options": [
              "The number of times a feature is used in the trees",
              "The contribution of each feature to the model's predictions",
              "The correlation between features",
              "The variance of each feature"
            ],
            "answer": "The contribution of each feature to the model's predictions"
          },
          {
            "question": "How is feature importance calculated in Random Forest?",
            "options": [
              "Based on the correlation between features",
              "Based on the decrease in impurity when a feature is used",
              "Based on the variance of each feature",
              "Based on the number of samples in each feature"
            ],
            "answer": "Based on the decrease in impurity when a feature is used"
          }
        ]
      }
    ]
  },

  {
    "path_id": 8,
    "title": "Feature Selection & Engineering",
    "description": "Feature selection and engineering are critical steps in the Machine Learning pipeline. They involve transforming raw data into meaningful features that improve model performance. This module covers techniques like feature construction, splitting, scaling, and more, ensuring your data is ready for effective modeling.",
    "topics": [
      {
        "id": 1,
        "title": "Feature Construction and Splitting",
        "theory": "Feature construction involves creating new features from existing data to improve model performance. This can include combining features, extracting information, or transforming data. Feature splitting, on the other hand, involves dividing data into training, validation, and test sets to ensure the model generalizes well to unseen data.",
        "mcqs": [
          {
            "question": "What is the primary goal of feature construction?",
            "options": [
              "To reduce the dataset size",
              "To create new features from existing data",
              "To remove all features",
              "To visualize data"
            ],
            "answer": "To create new features from existing data"
          },
          {
            "question": "Which of the following is NOT a part of feature splitting?",
            "options": [
              "Training set",
              "Validation set",
              "Test set",
              "Feature scaling"
            ],
            "answer": "Feature scaling"
          }
        ]
      },
      {
        "id": 2,
        "title": "Feature Scaling",
        "theory": "Feature scaling is a preprocessing step that standardizes or normalizes the range of independent variables or features of data. This is crucial for algorithms that are sensitive to the magnitude of data, such as gradient descent-based algorithms, SVM, and k-NN. Common techniques include standardization, normalization (MinMax, MaxAbs), and robust scaling.",
        "mcqs": [
          {
            "question": "Which of the following is a feature scaling technique?",
            "options": [
              "Standardization",
              "Normalization",
              "Robust Scaling",
              "All of the above"
            ],
            "answer": "All of the above"
          },
          {
            "question": "Standardization typically results in data with:",
            "options": [
              "Mean = 0 and Standard Deviation = 1",
              "Mean = 1 and Standard Deviation = 0",
              "Mean = 0 and Standard Deviation = 0",
              "Mean = 1 and Standard Deviation = 1"
            ],
            "answer": "Mean = 0 and Standard Deviation = 1"
          }
        ]
      },
      {
        "id": 3,
        "title": "Standardization",
        "theory": "Standardization is a feature scaling technique where the features are rescaled so that they have a mean of 0 and a standard deviation of 1. This is particularly useful for algorithms that assume or perform better with normally distributed data.",
        "mcqs": [
          {
            "question": "What is the mean of standardized data?",
            "options": [
              "0",
              "1",
              "2",
              "Depends on the data"
            ],
            "answer": "0"
          },
          {
            "question": "Standardization is particularly useful for:",
            "options": [
              "Algorithms that assume normally distributed data",
              "Algorithms that require categorical data",
              "Algorithms that do not require scaling",
              "Algorithms that work only with binary data"
            ],
            "answer": "Algorithms that assume normally distributed data"
          }
        ]
      },
      {
        "id": 4,
        "title": "Normalization (MinMax, MaxAbs, Robust Scaling)",
        "theory": "Normalization scales the features to a specific range, often [0, 1]. MinMax scaling rescales the data to a fixed range, MaxAbs scaling scales the data by its maximum absolute value, and Robust scaling uses the median and interquartile range, making it less sensitive to outliers.",
        "mcqs": [
          {
            "question": "Which normalization technique is less sensitive to outliers?",
            "options": [
              "MinMax Scaling",
              "MaxAbs Scaling",
              "Robust Scaling",
              "Standardization"
            ],
            "answer": "Robust Scaling"
          },
          {
            "question": "MinMax scaling typically scales data to the range:",
            "options": [
              "[0, 1]",
              "[-1, 1]",
              "[0, 100]",
              "Depends on the data"
            ],
            "answer": "[0, 1]"
          }
        ]
      }
    ]
  },

  {
    "path_id": 9,
    "title": "Ensemble Learning",
    "description": "Explore the power of Ensemble Learning, a technique that combines multiple models to improve predictive performance. This module covers various ensemble methods, including voting, bagging, boosting, and stacking, along with their applications and mathematical foundations.",
    "topics": [
      {
        "id": 1,
        "title": "Introduction to Ensemble Learning",
        "theory": "Ensemble Learning is a machine learning technique that combines the predictions of multiple models to produce a more accurate and robust result. By leveraging the strengths of different models, ensemble methods reduce the risk of overfitting and improve generalization. Common ensemble techniques include voting, bagging, boosting, and stacking.",
        "mcqs": [
          {
            "question": "What is the primary goal of Ensemble Learning?",
            "options": [
              "To use a single model for predictions",
              "To combine multiple models to improve accuracy",
              "To reduce the complexity of a single model",
              "To eliminate the need for data preprocessing"
            ],
            "answer": "To combine multiple models to improve accuracy"
          },
          {
            "question": "Which of the following is NOT an ensemble method?",
            "options": [
              "Voting",
              "Bagging",
              "Boosting",
              "Linear Regression"
            ],
            "answer": "Linear Regression"
          }
        ]
      },
      {
        "id": 2,
        "title": "Voting Ensembles",
        "theory": "Voting ensembles combine the predictions of multiple models by either majority voting (hard voting) or averaging predicted probabilities (soft voting). Hard voting is used for classification tasks, while soft voting can be applied to both classification and regression tasks. Voting ensembles are simple yet effective in improving model performance.",
        "mcqs": [
          {
            "question": "What is the difference between hard voting and soft voting?",
            "options": [
              "Hard voting uses majority voting, while soft voting averages probabilities",
              "Hard voting is used for regression, while soft voting is used for classification",
              "Hard voting is more accurate than soft voting",
              "Soft voting is only applicable to neural networks"
            ],
            "answer": "Hard voting uses majority voting, while soft voting averages probabilities"
          },
          {
            "question": "Which type of voting is suitable for regression tasks?",
            "options": [
              "Hard Voting",
              "Soft Voting",
              "Both",
              "Neither"
            ],
            "answer": "Soft Voting"
          }
        ]
      },
      {
        "id": 3,
        "title": "Bagging",
        "theory": "Bagging (Bootstrap Aggregating) is an ensemble technique that trains multiple models on different subsets of the training data, sampled with replacement. Bagging reduces variance and prevents overfitting. Common implementations include Bagging Classifiers and Bagging Regressors, which are based on decision trees or other base models.",
        "mcqs": [
          {
            "question": "What is the primary purpose of bagging?",
            "options": [
              "To increase model complexity",
              "To reduce variance and prevent overfitting",
              "To combine models using weighted averages",
              "To eliminate the need for cross-validation"
            ],
            "answer": "To reduce variance and prevent overfitting"
          },
          {
            "question": "Which of the following is an example of a bagging algorithm?",
            "options": [
              "AdaBoost",
              "Random Forest",
              "Gradient Boosting",
              "XGBoost"
            ],
            "answer": "Random Forest"
          }
        ]
      },
      {
        "id": 4,
        "title": "Random Forest",
        "theory": "Random Forest is a popular bagging-based ensemble method that uses multiple decision trees. Each tree is trained on a random subset of features and data, reducing correlation between trees and improving generalization. Key hyperparameters include the number of trees, maximum depth, and feature subset size. Random Forest balances bias and variance effectively.",
        "mcqs": [
          {
            "question": "What is the main advantage of Random Forest?",
            "options": [
              "It uses a single decision tree",
              "It reduces correlation between trees",
              "It requires less computational power",
              "It eliminates the need for hyperparameter tuning"
            ],
            "answer": "It reduces correlation between trees"
          },
          {
            "question": "Which hyperparameter controls the number of trees in a Random Forest?",
            "options": [
              "max_depth",
              "n_estimators",
              "min_samples_split",
              "max_features"
            ],
            "answer": "n_estimators"
          }
        ]
      },
      {
        "id": 5,
        "title": "Boosting",
        "theory": "Boosting is an ensemble technique that sequentially trains models, with each model correcting the errors of its predecessor. Popular boosting algorithms include AdaBoost, Gradient Boosting, and XGBoost. Boosting focuses on reducing bias and is highly effective for both regression and classification tasks.",
        "mcqs": [
          {
            "question": "Which of the following is a boosting algorithm?",
            "options": [
              "Random Forest",
              "AdaBoost",
              "Bagging",
              "Voting"
            ],
            "answer": "AdaBoost"
          },
          {
            "question": "What is the primary focus of boosting?",
            "options": [
              "Reducing variance",
              "Reducing bias",
              "Increasing model complexity",
              "Combining models using averaging"
            ],
            "answer": "Reducing bias"
          }
        ]
      },
      {
        "id": 6,
        "title": "AdaBoost",
        "theory": "AdaBoost (Adaptive Boosting) is a boosting algorithm that assigns higher weights to misclassified instances, forcing subsequent models to focus on harder-to-predict cases. AdaBoost is simple yet powerful and is widely used for classification tasks.",
        "mcqs": [
          {
            "question": "How does AdaBoost handle misclassified instances?",
            "options": [
              "By ignoring them",
              "By assigning higher weights to them",
              "By removing them from the dataset",
              "By averaging their predictions"
            ],
            "answer": "By assigning higher weights to them"
          },
          {
            "question": "AdaBoost is primarily used for:",
            "options": [
              "Regression tasks",
              "Classification tasks",
              "Clustering tasks",
              "Dimensionality reduction"
            ],
            "answer": "Classification tasks"
          }
        ]
      },
      {
        "id": 7,
        "title": "Gradient Boosting",
        "theory": "Gradient Boosting is a boosting technique that builds models sequentially, with each model minimizing the residual errors of the previous model using gradient descent. It is highly flexible and can be used for both regression and classification tasks. XGBoost is a popular implementation of Gradient Boosting.",
        "mcqs": [
          {
            "question": "What is the key idea behind Gradient Boosting?",
            "options": [
              "To combine models using majority voting",
              "To minimize residual errors using gradient descent",
              "To train models independently",
              "To reduce variance by averaging predictions"
            ],
            "answer": "To minimize residual errors using gradient descent"
          },
          {
            "question": "Which of the following is an implementation of Gradient Boosting?",
            "options": [
              "AdaBoost",
              "Random Forest",
              "XGBoost",
              "Bagging"
            ],
            "answer": "XGBoost"
          }
        ]
      },
      {
        "id": 8,
        "title": "XGBoost",
        "theory": "XGBoost (Extreme Gradient Boosting) is an optimized implementation of Gradient Boosting that is highly efficient and scalable. It supports regression, classification, and ranking tasks. XGBoost incorporates regularization to prevent overfitting and is widely used in competitions and real-world applications.",
        "mcqs": [
          {
            "question": "What makes XGBoost different from traditional Gradient Boosting?",
            "options": [
              "It uses bagging instead of boosting",
              "It incorporates regularization to prevent overfitting",
              "It is only used for classification tasks",
              "It does not require hyperparameter tuning"
            ],
            "answer": "It incorporates regularization to prevent overfitting"
          },
          {
            "question": "XGBoost can be used for:",
            "options": [
              "Regression tasks only",
              "Classification tasks only",
              "Regression, classification, and ranking tasks",
              "Clustering tasks only"
            ],
            "answer": "Regression, classification, and ranking tasks"
          }
        ]
      },
      {
        "id": 9,
        "title": "Stacking and Blending Ensembles",
        "theory": "Stacking and blending are advanced ensemble techniques that combine the predictions of multiple models using a meta-model. Stacking trains a meta-model on the predictions of base models, while blending averages the predictions with predefined weights. These methods often yield superior performance compared to individual models.",
        "mcqs": [
          {
            "question": "What is the role of a meta-model in stacking?",
            "options": [
              "To replace base models",
              "To combine predictions of base models",
              "To reduce the complexity of base models",
              "To eliminate the need for cross-validation"
            ],
            "answer": "To combine predictions of base models"
          },
          {
            "question": "Which technique uses predefined weights to average predictions?",
            "options": [
              "Stacking",
              "Blending",
              "Bagging",
              "Boosting"
            ],
            "answer": "Blending"
          }
        ]
      }
    ]
  }
  
];

export default machineLearningData;