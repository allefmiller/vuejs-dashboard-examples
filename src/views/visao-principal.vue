<template id="template">
  <div id="container" class="p-d-block p-mx-auto" style="width: 96vw; margin: 0 auto;">
    <h2 class="mt-2 mb-4">Visão principal</h2>
    <div class="grid">
      <div class="col">
        <div class="card">
          <h3 class="mb-2">Pizza</h3>
          <Chart type="pie" :data="pieChartData" :options="pieLightOptions" />
        </div>
      </div>
      <div class="col">
        <div class="card">
          <h3 class="mb-2">Rosquinha</h3>
          <Chart type="doughnut" :data="pieChartData" :options="pieLightOptions" />
        </div>
      </div>
      <div class="col">
        <div class="card">
          <h3 class="mb-2">Barra Vertical</h3>
          <Chart type="bar" :data="basicData" :options="basicOptions" />
        </div>
      </div>
      <div class="col">
        <div class="card">
          <h3 class="mb-2">Barra Horizontal</h3>
          <Chart type="bar" :data="basicData" :options="horizontalOptions" />
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      pieChartData: {
          labels: ['A','B','C'],
          datasets: [
              {
                  data: [300, 50, 100],
                  backgroundColor: ["#42A5F5","#66BB6A","#FFA726"],
                  hoverBackgroundColor: ["#64B5F6","#81C784","#FFB74D"]
              }
          ]
      },
      pieLightOptions: { 
        plugins: { legend: { labels: { color: '#495057' } } } 
      },
      basicData: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
              {
                  label: 'My First dataset',
                  backgroundColor: '#42A5F5',
                  data: [65, 59, 80, 81, 56, 55, 40]
              },
              {
                  label: 'My Second dataset',
                  backgroundColor: '#FFA726',
                  data: [28, 48, 40, 19, 86, 27, 90]
              }
          ]
      },
      horizontalOptions: {
          indexAxis: 'y',
          plugins: {
              legend: {
                  labels: {
                      color: '#495057'
                  }
              }
          },
          scales: {
              x: {
                  ticks: {
                      color: '#495057'
                  },
                  grid: {
                      color: '#ebedef'
                  }
              },
              y: {
                  ticks: {
                      color: '#495057'
                  },
                  grid: {
                      color: '#ebedef'
                  }
              }
          }
      },

    }
  }
}
</script>

<style scoped>
.card {
  width: 20rem;
  margin: 0 auto;
}

.card{
  text-align: center;
  padding: 5% 2%;
  background-color: var(--bluegray-100);
  border-radius: 10px;
}
</style>