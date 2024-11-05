import Vue from 'vue'
import { 
  Form ,
  Field 
} from 'vant'

const templateArr = [
  Form,
  Field
]


function reginsterElement (app){
  templateArr.forEach(template=>{
    app.component(template.name,template)
  })
}

export { reginsterElement }
