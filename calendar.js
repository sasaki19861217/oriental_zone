new Vue({
  el: '#calendar',
  data: {
    year:year,
    month:month,
    weekList: ['日','月','火','水','木','金','土'],
    list: row,
  },
  methods: {
    shift:function(val){
      if('back' == val){
        this.month = (this.month === 1)?12:this.month - 1;
        this.year = (this.month === 12)?this.year - 1:this.year;
      }else{
        this.month = (this.month === 12)?1:this.month + 1;
        this.year = (this.month === 12)?this.year + 1:this.year;
      }
      this.list = updateRow(this.year,this.month);
    },
    padLeft:function(val){
      return padLeft(val);
    }
  }
});
