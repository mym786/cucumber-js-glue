## Synopsis

CucumberJSGlue is wrapper on top of cucumberJS to match feature files with their corresponding step_definitions file. 

## How to Use

Create a glue.json file under the "features" folder with the following structure. 
```javascript
[{
	"feature_name": "feature1.feature",
	"step_definition" :"step_definitions//feature1.js"
},
{
	"feature_name": "feature2.feature",
	"step_definition" :"step_definitions//feature2.js"
}
]
```


## Installation 

npm i cucumber-js-glue --save


## Supported OS 

- Windows 
- Linux 