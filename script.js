// Learner Engagement Chart
new Chart(document.getElementById('engagementChart'), {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'Active Learners',
      data: [200, 300, 450, 600, 800],
      backgroundColor: '#4CAF50'
    }]
  }
});

// Scholarship Access Chart
new Chart(document.getElementById('scholarshipChart'), {
  type: 'pie',
  data: {
    labels: ['TOEFL Waiver', 'Age-Inclusive Kits', 'CV Templates'],
    datasets: [{
      data: [40, 35, 25],
      backgroundColor: ['#2196F3', '#FFC107', '#FF5722']
    }]
  }
});

// GitHub Engagement Chart
new Chart(document.getElementById('githubChart'), {
  type: 'line',
  data: {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [{
      label: 'Downloads',
      data: [50, 120, 180, 250],
      borderColor: '#9C27B0',
      fill: false
    }]
  }
});
