
"use strict";

// Valores publicados nas fontes oficiais citadas no site.
// Confirme as tabelas originais antes de reutilizar os dados.
const internet = {
  anos: ["2023", "2024", "2025"],
  percentuais: [92.5, 93.6, 95.0]
};

const educacao = {
  anos: ["2016", "2024"],
  faixa15a17: [87.0, 93.5],
  faixa18a24: [31.5, 31.5]
};

const cores = {
  azul: "#3977D5",
  verde: "#16856B",
  laranja: "#E5A33D",
  grade: "#e1e7ef"
};

// Gráfico de linhas: inclusão digital
new Chart(document.getElementById("graficoInternet"), {
  type: "line",

  data: {
    labels: internet.anos,
    datasets: [{
      label: "Domicílios com internet (%)",
      data: internet.percentuais,
      borderColor: cores.azul,
      backgroundColor: "rgba(57, 119, 213, 0.14)",
      fill: true,
      tension: 0.25,
      borderWidth: 3,
      pointRadius: 5,
      pointHoverRadius: 7
    }]
  },

  options: {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        position: "bottom"
      },
      tooltip: {
        callbacks: {
          label: context => `${context.parsed.y}%`
        }
      }
    },

    scales: {
      y: {
        min: 0,
        max: 100,
        title: {
          display: true,
          text: "Domicílios (%)"
        },
        grid: {
          color: cores.grade
        }
      },
      x: {
        title: {
          display: true,
          text: "Ano"
        }
      }
    }
  }
});

// Gráfico de barras: frequência escolar
new Chart(document.getElementById("graficoEducacao"), {
  type: "bar",

  data: {
    labels: educacao.anos,

    datasets: [
      {
        label: "15 a 17 anos",
        data: educacao.faixa15a17,
        backgroundColor: cores.azul,
        borderRadius: 5
      },
      {
        label: "18 a 24 anos",
        data: educacao.faixa18a24,
        backgroundColor: cores.verde,
        borderRadius: 5
      }
    ]
  },

  options: {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        position: "bottom"
      },
      tooltip: {
        callbacks: {
          label: context =>
            `${context.dataset.label}: ${context.parsed.y}%`
        }
      }
    },

    scales: {
      y: {
        min: 0,
        max: 100,
        title: {
          display: true,
          text: "Frequência escolar bruta (%)"
        },
        grid: {
          color: cores.grade
        }
      },
      x: {
        title: {
          display: true,
          text: "Ano"
        }
      }
    }
  }
});
