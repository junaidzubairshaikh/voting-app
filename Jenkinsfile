pipeline {
    agent any
    
    stages {
        stage('Hello git'){
            steps {
                echo "$GIT_BRANCH"
            }
        }
         stage('Install modules'){
            steps {
                sh (script: """ 
                    node version
                    npm install
                    """
                )
            }
        }
    }
}