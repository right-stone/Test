# Sample Test

Spring Boot 4.1.1 + Kotlin starter project using Gradle Kotlin DSL and Java 25.

## Requirements

- JDK 25
- Gradle 8.14+ or Gradle 9.x

## Run

```powershell
gradle bootRun
```

Open `http://localhost:8080/` to see `Hello World`. The health endpoint is available at `http://localhost:8080/actuator/health`.

Build an executable jar with `gradle bootJar`; run it with `java -jar build/libs/sample-test-0.0.1-SNAPSHOT.jar`.
