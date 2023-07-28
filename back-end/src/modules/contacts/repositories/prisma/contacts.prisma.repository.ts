import { PrismaService } from "src/database/prisma.service";
import { CreateContactDto } from "../../dto/create-contact.dto";
import { Contact } from "../../entities/contact.entity";
import { ContactsRepository } from "../contacts.repository";
import { UpdateContactDto } from "../../dto/update-contact.dto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ContactsPrismaRepository implements ContactsRepository{
    constructor(private prisma:PrismaService){}
    async create(data:CreateContactDto): Promise<Contact>{
        const contact = new Contact()
        Object.assign(contact,{
            ...data
        })
        const newContact = await this.prisma.contact.create({
            data:{
                fullName:data.fullName,
                email:data.email,
                telephone:data.telephone,
                userId:data.userId
            }
        })
        return newContact
    }
    async findAll():Promise<Contact[]>{
        const contacts = await this.prisma.contact.findMany()
        return contacts
    }
    async findOne(id:number):Promise<Contact>{
        const contact = await this.prisma.contact.findUnique({
            where: {id}
        })
        return contact
    }
    async update(id:number, data:UpdateContactDto):Promise<Contact>{
        const contact = await this.prisma.contact.update({
            where: {id},
            data:{...data}
        })
        return contact
    }
    async delete(id: number): Promise<void> {
        await this.prisma.contact.delete({
            where: {id}
        })
    }

}