pipeline {
    agent any
    environment {
        isAdmin = "${isAdmin}"
    }
    stages {
        stage('Hello git'){
            steps {
                echo "$GIT_BRANCH"
            }
        }
        stage('Say something '){
            steps {
                powershell(script: """ 
                    npm run say
                    """
                )
            }
        }
        stage('Install modules'){
            steps {
                powershell(script: """ 
                    node --version
                    npm install
                    """
                )
            }
        }
        stage('Build '){
            steps {
                powershell(script: """ 
                    npm run build
                    """
                )
            }
        }
    }
}