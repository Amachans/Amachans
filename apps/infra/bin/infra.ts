#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { MainStack } from "../lib/main-stack";
import { GlobalStack } from "../lib/global-stack";

const app = new cdk.App();

const account = "058264513113";
const envUs = {
  region: "us-east-1",
  account,
};
const envJp = {
  region: "ap-northeast-1",
  account,
};

const globalStack = new GlobalStack(app, "global", {
  env: envUs,
  crossRegionReferences: true,
});

new MainStack(
  app,
  "main",
  {
    env: envJp,
    crossRegionReferences: true,
  },
  {
    certificate: globalStack.certificate,
    hostedZone: globalStack.hostedZone,
  }
);
