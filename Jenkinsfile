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
                pwsh(script: """ 
                    node version
                    npm install
                    """
                )
            }
        }
    }
}