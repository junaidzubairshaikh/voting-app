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
                powershell(script: """ 
                    node --version
                    npm install
                    """
                )
            }
        }
    }
}