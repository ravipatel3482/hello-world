import { createRouter, createWebHistory } from 'vue-router'
import AppHome from "@/components/Home.vue";
import Practice from "@/components/Practice/Practice.vue";
import Databinding from "@/components/Practice/Databinding.vue";
import Hello from "@/components/Practice/Hello.vue";
import AttributeBinding from "@/components/Practice/AttributeBinding.vue";
import Condition from '@/components/Practice/Condition.vue';
import Looping from '@/components/Practice/Looping.vue';
import CandidateDetail from '@/components/Candidate/CandidateDetail.vue'
import CandidateAddup from '@/components/Candidate/CandidateForm.vue'
import CandidateList from '@/components/Candidate/ListCandidate.vue'
import AboutMe from '@/components/AboutMe.vue';
const routes = [
  { path: '/',name :"Home", component: AppHome },
  { path: '/home',redirect: '/'},
  { path: '/practice',
    name :"Practice",
    component: Practice ,
    children:
             [
                {
                  path: '', // Default child route
                  name: 'Hello',
                  component: Hello
                },
                {
                  path: 'databinding', // Loads at /practice/exe-1
                  name: 'Databinding',
                  component: Databinding
                },
                {
                  path: 'attribute-binding', // Loads at /practice/attribute-binding
                  name: 'AttributeBinding',
                  component: AttributeBinding
                },
                {
                  path: 'condition', // Loads at /practice/attribute-binding
                  name: 'condition',
                  component: Condition
                },
                {
                  path: 'looping', // Loads at /practice/attribute-binding
                  name: 'looping',
                  component: Looping,
                  children:[
                              {
                                path: '',
                                name: 'CandidateList',
                                component: CandidateList
                              },
                              {
                                path: 'view/:cid',
                                name: 'CandidateDetail',
                                component: CandidateDetail,
                                props: true
                              },
                              {
                                   path: 'add',
                                   name: 'AddCandidate',
                                   component: CandidateAddup
                               },
                             {
                                path: 'edit/:cid',
                                name: 'CandidateEdit',
                                component: CandidateAddup,
                                props: true
                              },
                           ]
                }
           ]
  },
  { path: '/aboutme', name :"AboutMe", component: AboutMe },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router;