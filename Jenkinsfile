pipeline {
    agent any
    
    stages {
        stage('Hello git'){
            steps {
                echo "$GIT_BRANCH"
            }
        }
         stage('Hello git'){
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