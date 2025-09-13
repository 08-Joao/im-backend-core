import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDto } from "src/user/dtos/create.dto";

@Injectable()
export class UserRepository {
    constructor(private prismaService: PrismaService) {}

    async create(data: CreateUserDto) {
        return await this.prismaService.user.create({
            data
        })
    }

    async findByEmail(email: string) {
        return await this.prismaService.user.findUnique({
            where: {
                email
            }
        })
    }

    async findById(id: string) {
        return await this.prismaService.user.findUnique({
            where: {
                id
            }
        })
    }

    async update(id: string, data: Partial<CreateUserDto>) {
        return await this.prismaService.user.update({
            where: {
                id
            },
            data
        })
    }

    async delete(id: string) {
        return await this.prismaService.user.delete({
            where: {
                id
            }
        })
    }
}