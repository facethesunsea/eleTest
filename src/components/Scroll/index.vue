<template>
  <div class="wrapper">
    <cube-scroll-nav 
    :side='true'
    :data="data"
    :current='current'
    @change="changeHandler"
    @sticky-change="stickyChangeHandler"
    >
    <ul class='prepend-header' slot="prepend">
      <li>3</li>
      <li>4</li>
      <li>4</li>
    </ul>
      <cube-scroll-nav-panel
      v-for='item in data'
      :key = 'item.name'
      :label = 'item.name'
      >
      <ul>
        <li v-for='food in item.foods' :key='food.name'>
          <div class='border'>
            <img :src="food.icon">
            <p>{{food.name}}</p>
          </div>
        </li>
      </ul>
      </cube-scroll-nav-panel>
    </cube-scroll-nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      true: true,
      current: '',
      data:[
        {
          name: 'sdasd11',
          type: -1,
          foods:[
            {
              name: 'dfasdf12',
              icon: '',
              image: ''
            },
            {
              name: 'dfasdf13',
              icon: '',
              image: ''
            },
            {
              name: 'dfasdf14',
              icon: '',
              image: ''
            },
            {
              name: 'dfasdf15',
              icon: '',
              image: ''
            },
            {
              name: 'dfasdf16',
              icon: '',
              image: ''
            },
            {
              name: 'dfasdf142',
              icon: '',
              image: ''
            },
            {
              name: 'dfasdf143',
              icon: '',
              image: ''
            },
            {
              name: 'dfasdf144',
              icon: '',
              image: ''
            },
            {
              name: 'dfasdf145',
              icon: '',
              image: ''
            },
            {
              name: 'dfasdf146',
              icon: '',
              image: ''
            },
            {
              name: 'dfasdf152',
              icon: '',
              image: ''
            },
            {
              name: 'dfasdf153',
              icon: '',
              image: ''
            },
            {
              name: 'dfasdf154',
              icon: '',
              image: ''
            },
            {
              name: 'dfasdf155',
              icon: '',
              image: ''
            },
            {
              name: 'dfasdf156',
              icon: '',
              image: ''
            },
          ]
        },
        {
          name: 'sdasd21',
          type: -1,
          foods:[
            {
              name: 'dfasdf12',
              icon: '',
              image: ''
            },
            {
              name: 'dfasdf13',
              icon: '',
              image: ''
            },
            {
              name: 'dfasdf14',
              icon: '',
              image: ''
            },
            {
              name: 'dfasdf15',
              icon: '',
              image: ''
            },
            {
              name: 'dfasdf16',
              icon: '',
              image: ''
            },
            {
              name: 'dfasdf142',
              icon: '',
              image: ''
            },
            {
              name: 'dfasdf22',
              icon: '',
              image: ''
            },
            {
              name: 'dfasdf23',
              icon: '',
              image: ''
            },
            {
              name: 'dfasdf24',
              icon: '',
              image: ''
            },
            {
              name: 'dfasdf25',
              icon: '',
              image: ''
            },
            {
              name: 'dfasdf26',
              icon: '',
              image: ''
            },
          ]
        },
        {
          name: 'sdasd31',
          type: -1,
          foods:[
            {
              name: 'dfasdf12',
              icon: '',
              image: ''
            },
            {
              name: 'dfasdf13',
              icon: '',
              image: ''
            },
            {
              name: 'dfasdf14',
              icon: '',
              image: ''
            },
            {
              name: 'dfasdf15',
              icon: '',
              image: ''
            },
            {
              name: 'dfasdf16',
              icon: '',
              image: ''
            },
            {
              name: 'dfasdf142',
              icon: '',
              image: ''
            },
            {
              name: 'dfasdf12',
              icon: '',
              image: ''
            },
            {
              name: 'dfasdf13',
              icon: '',
              image: ''
            },
            {
              name: 'dfasdf14',
              icon: '',
              image: ''
            },
            {
              name: 'dfasdf15',
              icon: '',
              image: ''
            },
            {
              name: 'dfasdf16',
              icon: '',
              image: ''
            },
            {
              name: 'dfasdf142',
              icon: '',
              image: ''
            },
            {
              name: 'dfasdf32',
              icon: '',
              image: ''
            },
            {
              name: 'dfasdf33',
              icon: '',
              image: ''
            },
            {
              name: 'dfasdf34',
              icon: '',
              image: ''
            },
            {
              name: 'dfasdf35',
              icon: '',
              image: ''
            },
            {
              name: 'dfasdf36',
              icon: '',
              image: ''
            },
          ]
        },
        {
          name: 'sdasd41',
          type: -1,
          foods:[
            {
              name: 'dfasdf12',
              icon: '',
              image: ''
            },
            {
              name: 'dfasdf13',
              icon: '',
              image: ''
            },
            {
              name: 'dfasdf14',
              icon: '',
              image: ''
            },
            {
              name: 'dfasdf15',
              icon: '',
              image: ''
            },
            {
              name: 'dfasdf16',
              icon: '',
              image: ''
            },
            {
              name: 'dfasdf142',
              icon: '',
              image: ''
            },
            {
              name: 'dfasdf42',
              icon: '',
              image: ''
            },
            {
              name: 'dfasdf43',
              icon: '',
              image: ''
            },
            {
              name: 'dfasdf44',
              icon: '',
              image: ''
            },
            {
              name: 'dfasdf45',
              icon: '',
              image: ''
            },
            {
              name: 'dfasdf46',
              icon: '',
              image: ''
            },
          ]
        }
      ]
    };
  },
  mounted() {
  },
  methods: {
    changeHandler(label){
      console.log(label)
    },
    stickyChangeHandler(current){
      console.log('---   '+current)   //TODO: test  or FIXME
    },
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 90vh;
  border: 1px solid #ff00ee;
  box-sizing: border-box;
}
</style>