import { Module } from '@nestjs/common';
import { ProjetoController } from './v2/projeto.controller';
import { OrcamentoController } from './v2/orcamento.controller';
import { UnidadeMedidaController } from './v2/unidade-medida.controller';
import { AcabamentoController } from './v2/acabamento.controller';
import { ComposicaoController } from './v2/composicao.controller';
import { ProdutoController } from './v2/produto.controller';
import { ProdutoGrupoController } from './v2/produto-grupo.controller';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './v2/auth.guard';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.process.env',
    }),
  ],
  controllers: [
    AcabamentoController,
    ComposicaoController,
    ProdutoController,
    ProdutoGrupoController,
    ProjetoController,
    OrcamentoController,
    UnidadeMedidaController,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
