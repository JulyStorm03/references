using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace signup_form
{
    
    public partial class MainWindow : Window
    {
        bool running = false;

        public MainWindow()
        {
            InitializeComponent();
        }
        
        
        private void btnToggleRun_Click(object sender, RoutedEventArgs e)
        {
            if(running)
            {
                tbStatus.Text = "Stopped";
                btnToggleRun.Content = "Run";
            }

            else
            {
                tbStatus.Text = "Running";
                btnToggleRun.Content = "Stop";
            }

            running = !running;

        }


    }
}