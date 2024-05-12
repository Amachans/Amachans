import { NestedStack, NestedStackProps } from "aws-cdk-lib";
import { ARecord, RecordTarget } from "aws-cdk-lib/aws-route53";
import { Construct } from "constructs";
import { Config } from "../../../config/config";
import { Bucket, IBucket } from "aws-cdk-lib/aws-s3";
import {
  AllowedMethods,
  Distribution,
  Function,
  FunctionCode,
  FunctionEventType,
  FunctionRuntime,
  PriceClass,
  ViewerProtocolPolicy,
} from "aws-cdk-lib/aws-cloudfront";
import { S3Origin } from "aws-cdk-lib/aws-cloudfront-origins";
import { GlobalStackProps } from "../../main-stack";
import { CloudFrontTarget } from "aws-cdk-lib/aws-route53-targets";

export class ClientStack extends NestedStack {
  readonly clientBucket: IBucket;

  constructor(
    scope: Construct,
    id: string,
    props: NestedStackProps,
    globalStackProps: GlobalStackProps
  ) {
    super(scope, id, props);

    const { certificate, hostedZone } = globalStackProps;

    const clientBucket = new Bucket(scope, "s3-jocpay-client", {
      bucketName: "jocpay-client",
    });

    // Cloudfront
    const cloudfront = new Distribution(scope, "cloudfront-jocpay-client", {
      defaultBehavior: {
        origin: new S3Origin(clientBucket),
        allowedMethods: AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
        viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        functionAssociations: [
          {
            function: new Function(scope, "cloudfront-function", {
              runtime: FunctionRuntime.JS_1_0,
              code: FunctionCode.fromFile({
                filePath: "lib/stacks/client/cloudfront-function.mjs",
              }),
            }),
            eventType: FunctionEventType.VIEWER_REQUEST,
          },
        ],
      },
      certificate,
      domainNames: [Config.domain],
      priceClass: PriceClass.PRICE_CLASS_200,
    });
    new ARecord(scope, "route53-a-record-jocpay-client", {
      target: RecordTarget.fromAlias(new CloudFrontTarget(cloudfront)),
      zone: hostedZone,
    });
  }
}
