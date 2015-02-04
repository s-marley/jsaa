function test() {}

test.testSomething = function(){
	var container = {
		one: {},
		two: {}
	};
	container.one.thing = 5;
	console.log(container);
}