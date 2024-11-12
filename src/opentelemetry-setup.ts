import { NodeSDK } from '@opentelemetry/sdk-node';
import { ConsoleSpanExporter } from '@opentelemetry/sdk-trace-base';
import { Resource } from '@opentelemetry/resources';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
import { WinstonInstrumentation } from '@opentelemetry/instrumentation-winston';

const sdk = new NodeSDK({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: 'your-nestjs-service',
  }),
  traceExporter: new ConsoleSpanExporter(), // 실제 사용 시 OTLP Exporter 설정
  instrumentations: [new HttpInstrumentation(), new WinstonInstrumentation()],
});

sdk.start(); // 글로벌 TracerProvider 자동 설정
