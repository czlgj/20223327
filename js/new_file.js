var img2 = document.getElementById("img2");
var avatar1 = document.getElementById("avatar1");
var avatar2 = document.getElementById("avatar2");
var avatar3 = document.getElementById("avatar3");
var h41 = document.getElementById("h41");
var h42 = document.getElementById("h42");
var h43 = document.getElementById("h43");
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var name = document.getElementsByClassName("name");

		fetch("https://api-juejin.suemor.com/api/v1/tab").then((res)=>res.json()).then((res)=>{
				const ulList = document.querySelector("#text1")	
				const liList = ulList.querySelectorAll("li")
				console.log(liList);	
				liList.forEach((item,index) => {
				item.textContent =res.data[index].title
			})
		})
		fetch("https://api-juejin.suemor.com/api/v1/aggregate/home/3").then((res)=>res.json()).then((res)=>{
				const ulList = document.querySelector("#text2")	
				const liList = ulList.querySelectorAll("li")
				console.log(liList);	
				liList.forEach((item,index) => {
				item.textContent =res.category[index].name
			})
			img2.src = res.ad.phoUrl;
		})
		fetch("https://api-juejin.suemor.com/api/v1/aggregate/home/3").then((res)=>res.json()).then((res)=>{
			avatar1.src = res.authorRank[0].avatar;
			avatar2.src = res.authorRank[1].avatar;
			avatar3.src = res.authorRank[2].avatar;
			h41.innerHTML = res.authorRank[0].username;
			h42.innerHTML = res.authorRank[1].username;
			h43.innerHTML = res.authorRank[2].username;
			p1.innerHTML = res.authorRank[0].introduce;
			p2.innerHTML = res.authorRank[1].introduce;
			p3.innerHTML = res.authorRank[2].introduce;
		})
		fetch("https://api-juejin.suemor.com/api/v1/post?pageCurrent=1&pageSize=15").then((res)=>res.json()).then((res)=>{
			const ulList = document.querySelector("#text3")
			const liList = ulList.querySelectorAll("div")
			console.log(liList);	
			liList.forEach((item,index) => {
			item.textContent =res.postList[index].content
			name.innerHTML = res.postList[index].username
			})
		})