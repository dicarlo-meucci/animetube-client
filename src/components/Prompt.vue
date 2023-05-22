<script>
import router from '../router'
</script>

<template>
    <div class="prompt-wrapper">
        <div>
            <p>Insert link</p>
        
            <input type="text">
        </div>
        <div>
            <button class="button cancel">Cancel</button>
            <button class="button set">Set</button>
        </div>
    </div>
</template>

<style scoped>
.prompt-wrapper {
    height: 300px;
    width: 500px;
    background-color: #454545;
    text-align: center;
    border: 2px solid #b844ff;

}

input[type=text]{
  width: 80%;
  padding: 4px 8px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.button {
    background-color: #b844ff;
    border: none;
    color: #454545;
    padding: 5px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 5px;
    transition-duration: 0.4s;
    cursor: pointer;
    border-radius: 15%;
    
}

.cancel {
    background-color: #454545;
    color: black;
    border: 2px solid red;
}

.cancel:hover {
    background-color: red;
    color: white;
}
.set {
    background-color: #454545;
    color: black;
    border: 2px solid #b844ff;
}

.set:hover {
    background-color: #b844ff;
    color: white;
}
</style>