
console.log("This is candidate profile");

let data=[{
    name:'Sufiyan Siddiqui',
    age: 25,
    city: 'Hyderabad',
    language: 'javascript',
    framework: 'Reactjs',
    image: './img01.jpg'
},

{
    name:'sana',
    age: 23,
    city: 'Mumbra',
    language: 'Sales',
    framework: 'Null',
    image: 'https://randomuser.me/api/portraits/women/41.jpg'
},

{
    name:'soha',
    age: 24,
    city: 'Muscat',
    language: 'javascript',
    framework: 'Reactjs',
    image: 'https://randomuser.me/api/portraits/women/60.jpg'
},

{
    name:'Asfiya',
    age: 21,
    city: 'Mumbra',
    language: 'Sales',
    framework: 'Null',
    image: 'https://randomuser.me/api/portraits/women/31.jpg'
},

{
    name:'Shahbaz',
    age: 23,
    city: 'Lucknow',
    language: 'Sales',
    framework: 'Null',
    image: 'https://randomuser.me/api/portraits/men/85.jpg'
},

{
    name:'Hajra',
    age: 24,
    city: 'Auranagabad',
    language: 'javascript',
    framework: 'Reactjs',
    image: 'https://randomuser.me/api/portraits/women/21.jpg'
},

{
    name:'Fahmida',
    age: 22,
    city: 'Thane',
    language: 'Sales',
    framework: 'Null',
    image: 'https://randomuser.me/api/portraits/women/71.jpg'
},

{
    name:'sham',
    age: 24,
    city: 'Hyderabad',
    language: 'javascript',
    framework: 'Reactjs',
    image: 'https://randomuser.me/api/portraits/men/51.jpg'
},

{
    name:'fahad',
    age: 22,
    city: 'Nanded',
    language: 'javascript',
    framework: 'Reactjs',
    image: 'https://randomuser.me/api/portraits/men/57.jpg'
},

{
    name:'lala',
    age: 24,
    city: 'Nanded',
    language: 'javascript',
    framework: 'Reactjs',
    image: 'https://randomuser.me/api/portraits/men/90.jpg'
},

{
    name:'wahaj',
    age: 24,
    city: 'Nanded',
    language: 'javascript',
    framework: 'Reactjs',
    image: 'https://randomuser.me/api/portraits/men/99.jpg'
},

{
    name:'Mubasheer',
    age: 25,
    city: 'Nanded',
    language: 'javascript',
    framework: 'Reactjs',
    image: 'https://randomuser.me/api/portraits/men/93.jpg'
},


{
    name:'shadab',
    age: 24,
    city: 'Nanded',
    language: 'javascript',
    framework: 'Reactjs',
    image: 'https://randomuser.me/api/portraits/men/96.jpg'
},




{
    name:'shami',
    age: 32,
    city: 'Lucknow',
    language: 'python',
    framework: 'django',
    image: 'https://randomuser.me/api/portraits/men/49.jpg'
},

{
    name:'Katrina',
    age: 24,
    city: 'Mumbai',
    language: 'javascript',
    framework: 'Reactjs',
    image: 'https://randomuser.me/api/portraits/women/51.jpg'
},

{
    name:'Ibrahim',
    age: 32,
    city: 'Mumbai',
    language: 'Sales',
    framework: 'Null',
    image: 'https://randomuser.me/api/portraits/men/54.jpg'
}

]

//cv Iterator
function cvIterator(profiles){
    let nextIndex=0;
    return{
        next: function(){
            return nextIndex<profiles.length ?
            {value: profiles[nextIndex++], done: false}:
            {done: true}
        }
    };
}

let candidates= cvIterator(data);

//button listners
let next =document.getElementById('next');
next.addEventListener('click', nextcv);
nextcv();
function nextcv(){
    let currentcandidate = candidates.next().value;
    let image =document.getElementById('image');
    let profile =document.getElementById('profile');

    if(currentcandidate !=undefined){
    image.innerHTML =`<img src='${currentcandidate.image}' height="100px" width="100px">`;

    profile.innerHTML=`<ul class="list-group">
    <li class="list-group-item">Name: ${currentcandidate.name}</li>
    <li class="list-group-item">${currentcandidate.age} year old</li>
    <li class="list-group-item">Lives in ${currentcandidate.city}</li>
    <li class="list-group-item">Primarily work on ${currentcandidate.language}</li>
    <li class="list-group-item">with ${currentcandidate.framework} framework</li>
</ul>`;

}
else{
    alert('candidate profiles completed');
    window.location.reload();
}

}