import java.util.Scanner;
public class DesimalToBinary{
	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);

		System.out.println("Enter 1. for GO DECIMAL -> ANY OTHER ");
		System.out.println("Enter 2. for ANY OTHER -> Decimal ");
		int choice=sc.nextInt();
		Binary b=new Binary();

		switch(choice){
			case 1:
				System.out.println("============= GO DECIMAL To ANY OTHER =============");
				System.out.print("enter decimal number : ");
				int num=sc.nextInt();
				System.out.print("enter base you want to go : ");
				int base=sc.nextInt();
				b.findBinary(num,base);
				break;

			case 2:
				System.out.println("============= ANY OTHER To Decimal =============");
				System.out.print(" enter your number type in (0 - 9) : ");
				int type=sc.nextInt();
				System.out.print("enter number : ");
				int num2=sc.nextInt();
				// Decimal d1=new Decimal();
				b.findDecimal(num2,type);
				break;

			default:
				System.out.println("enter value choice !! ");
				break;
		}	
	}
}

class Binary{
	int index=-1;
	int ans=0;
	public static void findBinary(int num,int base){
		int [] a=new int[100];
		int index=0;

		while(num>0){
			int reminder=num%base;
			a[index++]=reminder;
			num=num/base;
		}

		for(int i=index-1;i>=0;i--){
			System.out.print(a[i]);
		}
	}

	public void findDecimal(int num,int type){
		while(num!=0){
			index++;
			int reminder=num%10;
			ans=(int)(ans+reminder*Math.pow(type,index));
			num=num/10;
		}
			System.out.println("Decimal number is : "+ans);
	}
}