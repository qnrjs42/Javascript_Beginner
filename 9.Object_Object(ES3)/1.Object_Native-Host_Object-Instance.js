/*
	Object Object
	
	빌트인 오브젝트 :  Built-in Object
	네이티브 오브젝트 : Native Object
	호스트 오브젝트 : Host Object
	
	네이티브 오브젝트: JS 스펙에서 정의한 오브젝트
	빌트인 오브젝트 포함, 여기에 JS 코드를 실행할 때 만드는 오브젝트
	
	호스트 오브젝트: 빌트인, 네이티브 오브젝트를 제외한 오브젝트
	예: windows, DOM 오브젝트
	
	JS는 호스트 환경에서 브라우저의 모든 요소 기술을 연결하고 융합하며 이를 제어
*/

var node = document.querySelector("div");
console.log(node.nodeName); // DIV