# Monitoring

## Prometheus

[Prometheus](https://prometheus.io/docs/introduction/overview/){target="_blank"} is used to collect metrics from your applications and infrastructure. These metrics can be used to track the health of your systems, identify potential problems, and troubleshoot issues.

- [PromQL Cheat Sheet](https://promlabs.com/promql-cheat-sheet/){:trget="_blank"}
- [The 4 Types Of Prometheus Metrics](https://tomgregory.com/the-four-types-of-prometheus-metrics){:trget="_blank"}

## Spring Boot Default Metrics

Actuator module provides monitoring and management capabilities for your application, and includes the Micrometer metrics collection facility.  
It exposes many different monitoring and management endpoints over HTTP and JMX.

> NOTE: Micrometer is a vendor-neutral metrics facade, meaning that metrics can be collected in one common way, but exposed in the format required by many different monitoring systems.  
> Popular monitoring frameworks supported include Graphite, Prometheus, and StatsD.

![](https://tomgregory.com/article-assets/spring-boot-default-metrics/Prometheus-overview-1.png)

```groovy
// build.gradle
implementation 'org.springframework.boot:spring-boot-starter-actuator'
implementation 'io.micrometer:micrometer-registry-prometheus:1.5.1'
// application.properties
management.endpoints.web.exposure.include=metrics,prometheus
```

This configuration enables two endpoints:
- `/actuator/metrics` : provides a JSON API for navigating your metrics and viewing their values
- `/actuator/prometheus` : metrics in the custom format required for ingesting into Prometheus.


