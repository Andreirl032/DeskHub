import { Test, TestingModule } from '@nestjs/testing';
import { OrganizationController } from './organization.controller';
import { OrganizationService } from './organization.service';
import { PrismaService } from '../prisma/prisma.service';

const mockPrisma = {
  organization: {
    create: jest.fn().mockResolvedValue({
      id: '123',
      name: 'organizationTest',
      createdAt: new Date(),
    }),
    findUnique: jest.fn().mockResolvedValue({
      id: 'jcyddhmrzmd1m9iyf1k5zwze',
      name: 'Empresa',
      createdAt: new Date(),
    }),
    update: jest.fn().mockResolvedValue({
      id: 'jcyddhmrzmd1m9iyf1k5zwze',
      name: 'Enterprise',
      createdAt: new Date(),
    }),
    delete: jest.fn().mockResolvedValue({
      id: 'jcyddhmrzmd1m9iyf1k5zwze',
      name: 'Empresa',
      createdAt: new Date(),
    }),
  },
};

describe('OrganizationController', () => {
  let controller: OrganizationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrganizationController],
      providers: [
        OrganizationService,
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile();

    controller = module.get<OrganizationController>(OrganizationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('deve criar uma organização', async () => {
    const resultado = await controller.create({ name: 'organizationTest' });
    expect(resultado).toBeDefined();
  });

  it('deve atualizar uma organização', async () => {
    const resultado = await controller.update('jcyddhmrzmd1m9iyf1k5zwze', {
      name: 'Enterprise',
    });
    expect(resultado).toBeDefined();
  });

  it('deve achar uma organização', async () => {
    const resultado = await controller.findOne('jcyddhmrzmd1m9iyf1k5zwze');
    expect(resultado).toMatchObject({
      id: 'jcyddhmrzmd1m9iyf1k5zwze',
      name: 'Empresa',
    });
  });

  it('deve apagar uma organização', async () => {
    const resultado = await controller.remove('jcyddhmrzmd1m9iyf1k5zwze');
    expect(resultado).toBeDefined();
  });
});
