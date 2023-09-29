import java.util.Scanner;
import java.io.*;
public class PhoneDirectory{
	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		Scanner scStr=new Scanner(System.in);
		Operations op=new Operations();

		while (true) {
			System.out.println("enter 1. for insertNumber");
			System.out.println("enter 2. for delete");
			System.out.println("enter 3. for display");
			System.out.println("enter 4. for save");
			int choice=sc.nextInt();

			switch(choice){
				case 1:
					System.out.print("enter name : ");
					String name=scStr.nextLine();
					System.out.print("enter phoneNo : ");
					long phoNo=sc.nextLong();
					op.insert(phoNo,name);
					break;

				case 2:

					System.out.println("enter 1. for delete by name");
					System.out.println("enter 2. for delete by Number");
					int choice2=sc.nextInt();

					switch(choice2){
						case 1:
							System.out.print("enter name you want to delete : ");
							String nam=scStr.nextLine();
							op.delete(nam);
							break;

						case 2:
							System.out.print("enter number you want to delete : ");
							long number=sc.nextLong();
							op.delete(number);
							break;

						default:
							System.out.println("enter valid choice !1");
							break;
					}

				case 3:
					op.display();
					break;

				case 4:
					op.saveOutput();
					break;

				default:
					System.out.println("enter value choice !!");
					break;
			}	
		}
	}
}

class Node{
	long phoNo;
	String name;
	Node lptr;
	Node rptr;

	Node(long phoNo,String name){
		this.phoNo=phoNo;
		this.name=name;
		this.lptr=null;
		this.rptr=null;
	}
}

class Operations{
	Node first;
	Node last;

	public void insert(long phoNo,String name){
		Node nNode=new Node(phoNo,name);

		if((first==null) && (last==null)){
			first=nNode;
			last=nNode;
		}else{
			nNode.rptr=first;
			first.lptr=nNode;
			first=nNode;
		}
	}

	public void delete(String name2){
		Node save=first;
		Node pred=first;

		if((first==null)&&(last==null)){
			System.out.println("empty list ");
		}

		else{
			while(!(save.name).equals(name2)){
				pred=save;
				save=save.rptr;
			}
			pred.rptr=save.rptr;
			save.rptr.lptr=pred;
		}

		// if(save.rptr==null){
		// 	last=last.lptr;
		// 	last.rptr=null;
		// }	
		// if(save.lptr==null){
		// 	first=first.rptr;
		// 	first.lptr=null;
			// ------------------first last incomplete for delete------------------
		// }
	}

	public void delete(long number){
		Node save=first;
		Node pred=first;

		if((first==null)&&(last==null)){
			System.out.println("empty list ");
		}

		else{
			while(save.phoNo!=number){
				pred=save;
				save=save.rptr;
			}
			pred.rptr=save.rptr;
			save.rptr.lptr=pred;
		}

		// if(save==last){
		// 	last=last.lptr;
		// 	last.rptr=null;
		// }	
		// if(save.lptr==null){
		// 	first=first.rptr;
		// 	first.lptr=null;
		// }
	}

	public void display(){
		Node save=first;
		if(first==null){
			System.out.println("empty !!! ");
		}else{		
			while(save.rptr!=null){
				System.out.println("______________________________________");
				System.out.println("name is "+save.name);
				System.out.println("Number is "+save.phoNo);
				System.out.println("______________________________________");
				save=save.rptr;
			}

			if(save.rptr==null){
				System.out.println("______________________________________");
				System.out.println("name is "+save.name);
				System.out.println("Number is "+save.phoNo);
				System.out.println("______________________________________");
			}
		}
	}

	public void saveOutput(){
		int count=0;
		try{
			BufferedWriter writer=new BufferedWriter(new FileWriter("CallHistory.txt "+count)); 
			Node save=first;
			if(first==null){
				System.out.println("empty !!! ");
			}
			else{	
					writer.write("___________________________________________CALL LOG__________________________________________");
				writer.write("\n");	
				while(save.rptr!=null){
					writer.write("\n");
					writer.write(save.name +" : "+save.phoNo);
					writer.write("\n");
					writer.write("_____________________________________________________________________________________________");
					writer.write("\n");
					save=save.rptr;
				}

				if(save.rptr==null){
					writer.write("\n");
					writer.write(save.name +" : "+save.phoNo);
					writer.write("\n");
					writer.write("_____________________________________________________________________________________________");
					writer.write("\n");
				}
				count++;
			}

			writer.close();
			System.out.println("successfully saved !!");
		}
		catch(Exception e){
			System.out.println(e);
		}
	}
}