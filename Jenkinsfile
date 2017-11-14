node('default') {
  checkout scm
  stage('SonarQube analysis') {
    // requires SonarQube Scanner 2.8+
    def scannerHome = tool 'sonarqube';
    def PULL_REQUEST = env.CHANGE_ID
    withCredentials([[$class: 'StringBinding', credentialsId: 'navadevops-personal-token', variable: 'GITHUB_ACCESS_TOKEN']]) {
      withSonarQubeEnv('sonarcloud') {
        def sonarcmd = "${scannerHome}/bin/sonar-scanner "

        if (PULL_REQUEST) {
          sonarcmd = sonarcmd +
            "-Dsonar.analysis.mode=preview " +
            "-Dsonar.github.pullRequest=${PULL_REQUEST} " +
            "-Dsonar.github.oauth=${GITHUB_ACCESS_TOKEN}"
        }
        sh sonarcmd
      }
    }
  }
}