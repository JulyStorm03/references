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

namespace practice_1
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        private void Button_Click_1(object sender, RoutedEventArgs e)
        {
            Hello_textbox.Text = "Hello";

            int a = 1;
            char c = 'A';
            float f = 123.45f;
            decimal d = 400.85m;
            int b = default;
            bool tf = default;

            Hello_textbox.Text = ($"{a},{c},{f},{d},{b}");


            Hello_textbox2.Text = ()
        }
    }
}