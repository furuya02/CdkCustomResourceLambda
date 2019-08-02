#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { CdkCustomResourceStack } from '../lib/cdk_custom_resource-stack';

const app = new cdk.App();
new CdkCustomResourceStack(app, 'CdkCustomResourceStack');
