pipeline {
    agent any
    environment {
        NG_APP_IS_ADMIN = "${isAdmin}"
    }
    stages {
        stage('Logs env variables'){
            steps {
                echo "${isAdmin}"
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