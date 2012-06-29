1. Person
	* username (hashed email)
	* password (ID)
	* First name
	* Lastname (NOT FOR STUDENTS)
	* rails generate scaffold Person email:string password:string firstName:string lastName:string roles:has_and_belongs_to_many permissions:has_and_belongs_to_many

1. Course 
	* title
	* meeting timeS
	* section number/course number
	* teacherS
	* studentS
	* objS
	* startDate
	* endDate
	* rails generate scaffold Course title:string password:string firstName:string lastName:string start:date end:date


1. Meeting Time
	* Monday
	* Tuesday
	* Wednesday
	* Thursday
	* Friday
	* Saturday
	* Sunday
	* StartTime
	* EndTime
	* rails generate scaffold MeetingTime monday:boolean tuesday:boolean wednesday:boolean thursday:boolean friday:boolean saturday:boolean sunday:boolean start:time end:time course:references

1. Item
	* name
	* article
	* filename
	* img_width
	* img_height
	* diameter
	* length
	* width
	* height
	* area
	* volume
	* person
	* rails generate scaffold Item name:string article:string filename:string diameter:float length:float width:float height:float area:float volume:float person:references

1. Role (admin, analyst, teacher, student)
	* name
	* rails generate scaffold Role name:string permissions:has_and_belongs_to_many persons:has_and_belongs_to_many

1. Permission (create_image, share_image_w_teacher, share_image_w_class, share_img_w_all)
	* name
	* rails generate scaffold Permission name:string roles:has_and_belongs_to_many persons:has_and_belongs_to_many

1. Role_x_Permission (implied in person and permission)
	* role
	* permission

1. Person_x_Permission (implied in person and permission)
	* person
	* permission

1. Ixn_Log
	* Person
	* Type
	* Time
	* Details
	* rails generate scaffold InteractionLog person:belongs_to logType:references time:time details:text

1. LogType
	* name
	* rails generate scaffold LogType name:string 