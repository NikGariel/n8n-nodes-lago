import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { N8NPropertiesBuilder, N8NPropertiesBuilderConfig } from '@devlikeapro/n8n-openapi-node';
import * as doc from './data.json'; // <=== Your OpenAPI v3 spec

const config: N8NPropertiesBuilderConfig = {};
const parser = new N8NPropertiesBuilder(doc, config);
const properties = parser.build();

export class LagoApi implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'LagoApi',
		name: 'lagoapi',
		icon: 'file:lagoapi.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with Lago API',
		defaults: {
			name: 'LagoApi',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'lagoApi',
				required: false,
			},
		],
		requestDefaults: {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			baseURL: '={{$credentials.url}}',
		},
		properties: properties, // <==== HERE
	};
}
